export const queryProjects = `
{
  projectCollection {
    total
    limit
    items {
      id
      title
      description
      picture{
        size
        title
        width
        height
        fileName
        url
      }
    }
  }
}
`