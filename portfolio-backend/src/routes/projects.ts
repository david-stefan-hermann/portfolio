import { Router } from 'express'
import { promises as fs } from 'fs'
import path from 'path'

const router = Router()

router.get('/', async (req, res) => {
  const dataPath = path.join(__dirname, '../../data/projects')
  try {
    const folders = await fs.readdir(dataPath)
    const result = await Promise.all(folders.map(async (folder) => {
      const folderPath = path.join(dataPath, folder)
      const files = await fs.readdir(folderPath)
      const jsonFile = files.find(file => file.endsWith('.json'))
      if (jsonFile) {
        const jsonData = await fs.readFile(path.join(folderPath, jsonFile), 'utf-8')
        const images = files.filter(file => !file.endsWith('.json')).map(file => path.join('/projects', folder, file))
        return { ...JSON.parse(jsonData), images }
      }
      return null
    }))
    res.json(result.filter(item => item !== null))
  } catch (err) {
    res.status(500).send({ error: 'Failed to load projects data' })
  }
})

export default router
