export const queryProjects = `
{
  projectCollection {
    total
    limit
    items {
      id
      title
      description
      slug
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