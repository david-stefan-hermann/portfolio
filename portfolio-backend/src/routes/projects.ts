import { Router } from 'express'
import { promises as fs } from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const router = Router()

router.get('/', async (req, res) => {
  const dataPath = path.join(__dirname, '../../data/projects')

  const baseUrl = process.env.BASE_URL

  try {
    const folders = await fs.readdir(dataPath)
    const result = await Promise.all(folders.map(async (folder) => {
      const folderPath = path.join(dataPath, folder)
      const files = await fs.readdir(folderPath)
      const jsonFile = files.find(file => file.endsWith('.json'))
      if (jsonFile) {
        const jsonData = await fs.readFile(path.join(folderPath, jsonFile), 'utf-8')

        let parsedData = null
        try {
          parsedData = JSON.parse(jsonData)
        } catch (err) {
          console.error(`Failed to parse JSON data from file ${jsonFile}: ${err}`)
        }
        if (parsedData) {
          const images = files
            .filter(file => !file.endsWith('.json'))
            .map(file => `${baseUrl}/projects/${folder}/${file}`)
          return { ...parsedData, images }
        }
        return null
      }
      return null
    }))
    res.json(result.filter(item => item !== null))
  } catch (err) {
    console.error(err)
    res.status(500).send({ error: 'Failed to load projects data' })
  }
})

export default router
