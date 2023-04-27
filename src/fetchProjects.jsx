import { createClient } from "contentful";
import { useEffect } from "react"
import { useState } from "react"

const client = createClient({
  space: 'rvn8i06az6uv',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.getEntries({content_type:'Projects'})
        const projects = response.items.map(item => {
          const {title, url, image} = item.fields
          const imageUrl = image?.fields?.file?.url
          const id = item.sys.id
          return {id, title, url, imageUrl}})

        setProjects(projects)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getData()
  } ,[])

  return {loading, projects}
}