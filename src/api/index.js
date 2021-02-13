import axios from 'axios'
import { queryProjects } from './queries'

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENFUL_ID}/`


export const getProjects = async () => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query:queryProjects
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENFUL_TOKEN}`,
      }
    })
    console.log(response.data)

    return response.data

  } catch (error) {
    console.log("error", error);
  }
}

export const getProject = async (id) => {
  try {
    const response = await axios({
      method: 'post',
      url,
      data: {
        query:`
          query ProjectById {
            project(id:"${id}") {
              sys {
                id
                spaceId
                environmentId
                publishedAt
                firstPublishedAt
                publishedVersion
              }
              id
              url
              slug
              title
              description
              picture{
                title
                fileName
                url
              }
              personaTitle
              personaText
              personaImagesCollection{
                total
                items{
                  url
                  title
                }
              }
              competitiveTitle
              competitiveText
              competitiveImage {
                title
                url
              }
              wirefreamesTitle
              wireframesText
              wireframesImagesCollection{
                total
                items{
                  url
                  title
                }
              }
              uiTitle
              uiText
              uiImagesCollection{
                total
                items{
                  url
                  title
                }
              }
              conceptTitle
              conceptVideoText
              conceptVideoVideo{
                url
                title
              }
              showcaseImagesCollection{
                total
                items{
                  url
                  title
                  description
                }
              }
            }
          }
        `
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_CONTENFUL_TOKEN}`,
      }
    })

    //console.log(response)
    return response.data

  } catch (error) {
    console.log("error", error);
  }
}

