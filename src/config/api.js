import axios from 'axios'

const authToken = localStorage.getItem('auth_token')
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

let authHeader

if (process.env.NODE_ENV !== 'production') {
  authHeader = `bearer ${process.env.GITHUB_TOKEN}`
} else if (authToken && authToken !== 'undefined') {
  authHeader = `bearer ${authToken}`
}
headers['Authorization'] = authHeader

const api = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers
})

export default api
