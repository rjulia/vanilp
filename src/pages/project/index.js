import _ from 'lodash'
import React, { useEffect, useState} from 'react'
import './project.scss'
import {
  useParams
} from "react-router-dom"
import { getProject } from '../../api';

const Project = (props) => {
  let params = useParams();
  const { location } = props 
  const [project, setProject] = useState({})

  const apiGetProject = () => {
    getProject(_.get(location, 'state.id')).then((response) => {
      console.log(response)
      setProject(_.get(response, 'data.project')) 
    })
  }
  useEffect(() => {
    apiGetProject()
  }, [])

  console.log(project)

  return (
    <div className="container-fluid-project">
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
            <img 
              src={_.get(project, 'picture.url')}
              alt={_.get(project, 'picture.title')}
            />
          </div>
        </div>
        {
          project.personaText && (
            <div className="box-persona">
              <div className="content-image">
                <img 
                  src={_.get(project, 'personaImagesCollection.items[0].url')}
                  alt={_.get(project, 'personaImagesCollection.items[0].title')}
                />
                <img
                  className="second-image" 
                  src={_.get(project, 'personaImagesCollection.items[1].url')}
                  alt={_.get(project, 'personaImagesCollection.items[1].title')}
                />
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
                  <img 
                    src={_.get(project, 'competitiveImage.url')}
                    alt={_.get(project, 'competitiveImage.title')}
                  />
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
    </div>
  )
}

export default Project
