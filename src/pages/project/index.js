import _ from 'lodash'
import React, { useEffect, useState} from 'react'
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
      setProject(_.get(response, 'data')) 
    })
  }
  useEffect(() => {
    apiGetProject()
  }, [])

  console.log(params, props)

  return (
    <div style={{color: '#fff'}}>
      project
    </div>
  )
}

export default Project
