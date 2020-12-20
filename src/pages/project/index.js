import _ from 'lodash'
import React, { useEffect, useState, useRef} from 'react'
import { Parallax } from 'react-scroll-parallax';
import './project.scss'
import {
  useParams
} from "react-router-dom"
import { getProject } from '../../api';
import {IconMenu, MenuOverhead} from '../../components'

const Project = (props) => {
  let params = useParams();
  const ref = useRef();
  const { location } = props 
  const [project, setProject] = useState({})
  const [pageYOffset, setPageYOffset] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const apiGetProject = () => {
    getProject(_.get(location, 'state.id')).then((response) => {
      console.log(response)
      setProject(_.get(response, 'data.project')) 
    })
  }
  const handleScroll = (event) => {
    const posY = ref.current.getBoundingClientRect().top;
    setInnerHeight(window.innerHeight)
    const offset = window.pageYOffset - posY;
    setPageYOffset(offset)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    apiGetProject()
  }, [])

  const onOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
    addClassBody(isOpenMenu)
  }

  const addClassBody = (menu) => {
    if (!menu) {
      document.body.style.overflow = "hidden"
      document.body.style.height = "100%"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.height = "auto"
    }
  }

  console.log(project)

  return (
    <div ref={ref} className="container-fluid-project">
      <IconMenu 
        offset={pageYOffset} 
        onOpenMenu={onOpenMenu} 
        isOpenMenu={isOpenMenu}
      />
      <div>
        <div>
          <img src={''} alt=""/>
        </div>
      </div>
      <div className="container-project">
        <div className="box-head">
          <div className="content-head">
            <h1>{_.get(project, 'title')}</h1>
            <p>{_.get(project, 'description')}</p>
          </div>
          <div className="content-image">
          <Parallax y={['-400px', '200px']}>
            <img 
              src={_.get(project, 'picture.url')}
              alt={_.get(project, 'picture.title')}
            />
           </Parallax>
          </div>
        </div>
        {
          project.personaText && (
            <div className="box-persona">
              <div className="content-image">
              <Parallax y={['300px', '-500px']}>
                <img 
                  src={_.get(project, 'personaImagesCollection.items[0].url')}
                  alt={_.get(project, 'personaImagesCollection.items[0].title')}
                />
              </Parallax>
              <Parallax y={['0px', '-1200px']}>
                <img
                  className="second-image" 
                  src={_.get(project, 'personaImagesCollection.items[1].url')}
                  alt={_.get(project, 'personaImagesCollection.items[1].title')}
                />
              </Parallax>
              </div>
              <div className="content-sections">
                <h1>Persona</h1>
                <p>{_.get(project, 'personaText')}</p>
              </div>
            </div>
          )
        }
        {
          project.competitiveText && (
            <div className="box-competitive">
              <div>
                <div className="content-sections">
                  <h1>Competitive Analysis</h1>
                  <p>{_.get(project, 'personaText')}</p>
                </div>
                <div className="content-image">
                <Parallax x={['200px', '0px']}>
                  <img 
                    src={_.get(project, 'competitiveImage.url')}
                    alt={_.get(project, 'competitiveImage.title')}
                  />
                </Parallax>
                </div>
              </div>
            </div>
          )
        }
        {
          project.wireframesText && (
            <div className="box-wireframes">
              <div>
                <div className="content-image">
                  <img 
                    src={_.get(project, 'wireframesImagesCollection.items[0].url')}
                    alt={_.get(project, 'wireframesImagesCollection.items[0].title')}
                  />
                </div>
                <div className="content-sections">
                  <h1>Wireframes</h1>
                  <p>{_.get(project, 'wireframesText')}</p>
                </div>
              </div>
            </div>
          )
        }{
          project.uiText && (
            <div className="box-ui">
              <div>
                <div className="content-sections">
                  <h1>Wireframes</h1>
                  <p>{_.get(project, 'uiText')}</p>
                </div>
                <div className="content-image">
                  <img 
                    src={_.get(project, 'uiImagesCollection.items[0].url')}
                    alt={_.get(project, 'uiImagesCollection.items[0].title')}
                  />
                </div>
              </div>
            </div>
          )
        }
        {
          project.conceptVideoText && (
            <div className="box-concept-video">
              <div>
                <div className="content-sections">
                  <h1>Concept Video</h1>
                  <p>{_.get(project, 'conceptVideoText')}</p>
                </div>
                <div className="content-image">
                  <video width="800" controls>
                    <source src={_.get(project, 'conceptVideoVideo.url')} type="video/mp4"/>
                    Your browser does not support HTML video.
                  </video>
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div className="footer-project">
        <div className="content-project-copyright">
            <p>VANIIIP © 2020</p>
            <p>Designed by Vani Ip 	Developed by Ramon Julia</p>
        </div>
      </div>
      <MenuOverhead onOpenMenu={onOpenMenu} isOpenMenu={isOpenMenu}/>

    </div>
  )
}

export default Project
