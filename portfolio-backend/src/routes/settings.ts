import { Router } from 'express'
import { promises as fs } from 'fs'
import path from 'path'
import dotenv from 'dotenv'

const router = Router()

router.get('/', async (req, res) => {
  const dataPath = path.join(__dirname, '../../data/settings')

  const baseUrl = process.env.BASE_URL

  try {
    const files = await fs.readdir(dataPath)
    const jsonFile = files.find(file => file.endsWith('.json'))
    if (jsonFile) {
      const jsonData = await fs.readFile(path.join(dataPath, jsonFile), 'utf-8')

      let parsedData = null
      try {
        parsedData = JSON.parse(jsonData)
      } catch (err) {
        console.error(`Failed to parse JSON data from file ${jsonFile}: ${err}`)
      }
      if (parsedData) {
        const images = files
          .filter(file => !file.endsWith('.json'))
          .map(file => `${baseUrl}/settings/${file}`)
        res.json({ ...parsedData, images })
      } else {
        res.json(null)
      }
    } else {
      res.json(null)
    }
  } catch (err) {
    console.error(err)
    res.status(500).send({ error: 'Failed to load settings data' })
  }
})

export default router
