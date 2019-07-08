import axios from 'axios'

const authToken = localStorage.getItem('auth_token')
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

if (authToken && authToken !== 'undefined') headers['Authorization'] = `bearer ${authToken}`

const api = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers
})

export default api
