import { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../../config'


interface ApiBlogData {
  site?: string
  location?: string
  study?: string
  start_date?: string
  end_date?: string
  link?: string
  images?: string[]
}

const useGetExperience = (): ApiBlogData[] | null => {
  const [data, setData] = useState<ApiBlogData[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/experience`)
        setData(response.data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    fetchData()
  })

  return data
}

export default useGetExperience