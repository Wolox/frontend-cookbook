import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `bearer ${process.env.GITHUB_TOKEN}`
  }
})

export default api
