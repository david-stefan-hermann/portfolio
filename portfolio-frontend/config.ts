const dev = {
    API_URL: 'http://localhost:3000/api'
}

const prod = {
    API_URL: ''
}

const config = process.env.NODE_ENV === 'development' ? dev : prod

export default config