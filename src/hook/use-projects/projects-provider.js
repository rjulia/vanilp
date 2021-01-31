/**
 * MiniCartProvider
 * Contain most logic mini cart
 */
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import ProjectsContext from './projects-context'
import {getProjects, getProject} from '../../api'


export default function MiniCartProvider({ children }) {

  // internal state
  const [projects, setProjects] = useState({})
  const [project, setProject] = useState({})
  const [nextProject, setNextProject] = useState({})

  const [loading, setLoading] = useState(false)
  const [currentId, setCurrentId] = useState(0)
  const [totalProjects, setTotalProjects] = useState(0)

  const apiGetProject = (location) => {
    setLoading(true)
    getProject(_.get(location, 'state.id')).then((response) => {
      setCurrentId(_.get(response, 'data.project.id'))
      setProject(_.get(response, 'data.project')) 
      setLoading(false) 
      
    })
  }
  
  useEffect(() => {
    const getNextProjectId = () => {
      const idx = _.findIndex(projects, {id: currentId + 1})
      setLoading(true)
      const next = projects[idx]
      setNextProject(next)
    }
    getNextProjectId(currentId)
  }, [currentId, projects])

  
  useEffect(() => {
    setLoading(true)
    getProjects().then((response) => {
      const items = _.get(response, 'data.projectCollection.items')
      setProjects(_.orderBy(items, ['id'],['asc']))
      setLoading(false)
      setTotalProjects(items.length)
    })
  }, []);
  
  console.log(projects)
  const state = {
    projects,
    project,
    loading,
    apiGetProject,
    nextProject,
    totalProjects,
    currentId,
  }

  return (
    <ProjectsContext.Provider value={state}>
      {children}
    </ProjectsContext.Provider>
  )
}