import { useContext } from 'react'
import ProjectsContexts from './projects-context'

/**
 * useLink
 * The custom hook which provided to external use via context
 */
const useProjects = () => {
  const context = useContext(ProjectsContexts)
  return context
};

export default useProjects