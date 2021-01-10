import { createContext } from 'react'

const MiniCartContext = createContext({
  projects: {},
  project: {},
  nextProject: {},
  totalProjects: 0,
  loading: true,
  currentId: '',
  apiGetProject: () => {},
})

export default MiniCartContext