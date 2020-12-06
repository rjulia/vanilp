import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import RightArrow from '../../assets/svg/right-arrow.svg'
import './my-projects.scss'


const MyProjects = ({ projects }) => {
  const [allProjects, setAllProjects] = useState([])
  const { left, opacity } = useSpring({
    opacity: 1,
    left: 0,
    from: {
      left: -100,
      opacity: 0
    },
    config: { duration: 1000 }
  })

  useEffect(() => {
    setAllProjects(projects)
  }, [projects])

  const ItemSlider = ({ project, idx }) => (
    <Slide index={idx}>
      <div className="container-item-carousel">
        <div className="content-item-carousel">
          <h4>{project.title}</h4>
          <p>
            {project.description}
          </p>

          <Link style={{textDecoration: 'none'}} to={`/project/${project.slug}`}>
            <div className="button-item-carousel">
              <span>Discover the project</span>
              <img src={RightArrow} alt="arrow"></img>
            </div>
          </Link>

        </div>
        <div className="image-item-carousel">
          <img
            src={_.get(project, 'picture.url')}
            alt={_.get(project, 'picture.title')} />
        </div>

      </div>
    </Slide>
  )

  return (
    <div className="container-projects">
      <animated.div style={{
        position: 'absolute',
        left,
        opacity,
        zIndex: 2,
      }}>
        <p className="title">My Projects</p>
      </animated.div>
      <div className="container-carousel-projects">
        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={600}
          totalSlides={3}
          className={"carousel"}
        >
          <Slider
            className="box-carousel-projects"
            >
            {_.map(allProjects, (project, idx) => (
              <ItemSlider project={project} idx={idx} key={project.id} />
            ))}
          </Slider>
          <DotGroup />
        </CarouselProvider>
      </div>
    </div>
  )
}

export default MyProjects
