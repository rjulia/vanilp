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

