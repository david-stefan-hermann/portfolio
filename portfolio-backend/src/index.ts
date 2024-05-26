import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import educationRouter from './routes/education'
import projectsRouter from './routes/projects'

const app = express()
const port = 3000

app.use(bodyParser.json())

// Serve static files (images)
app.use('/education', express.static(path.join(__dirname, '../data/education')))
app.use('/projects', express.static(path.join(__dirname, '../data/projects')))

app.use('/api/education', educationRouter)
app.use('/api/projects', projectsRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
