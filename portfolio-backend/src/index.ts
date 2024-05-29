import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import educationRouter from './routes/education'
import experienceRouter from './routes/experience'
import projectsRouter from './routes/projects'
import dotenv from 'dotenv'
import cors from 'cors'


const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

const app = express()
const port = process.env.PORT || 3000
const baseUrl = process.env.BASE_URL

if (!baseUrl) {
  console.error('BASE_URL is not set in .env file')
  process.exit(1)
}

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(bodyParser.json())

// Serve static files (images)
app.use('/education', express.static(path.join(__dirname, '../data/education')))
app.use('/experience', express.static(path.join(__dirname, '../data/experience')))
app.use('/projects', express.static(path.join(__dirname, '../data/projects')))

app.use('/api/education', educationRouter)
app.use('/api/experience', experienceRouter)
app.use('/api/projects', projectsRouter)

app.listen(port, () => {
  console.log(`Server is running at ${baseUrl} (port: ${port})`)
})
