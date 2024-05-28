import { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../config'


interface ApiData {
  // define the shape of your API data here
  // for example:
  id: number
  name: string
  description: string
  images?: string[]
}

const useGetProjects = (): ApiData[] => {
  const [data, setData] = useState<ApiData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/projects`)
        setData(response.data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  })

  return data
}

export default useGetProjects