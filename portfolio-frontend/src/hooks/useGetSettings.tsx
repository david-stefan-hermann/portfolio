import { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../config'


export interface ApiData {
  hero_title?: string
  hero_subtitle?: string
  gh_link?: string
  images?: string[]
}

const useGetSettings = (): ApiData | null => {
  const [data, setData] = useState<ApiData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/settings`)
        setData(response.data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  })

  return data
}

export default useGetSettings