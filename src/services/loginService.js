import axios from 'axios'

import api from '../config/api'

const getTokenFromResponse = queryParams => queryParams.match(/access_token=[a-z0-9]+/g)[0].substring('access_token='.length)

export const storeToken = response => {
  const token = getTokenFromResponse(response.data)
  localStorage.setItem('auth_token', token)
  api.defaults.headers['Authorization'] = `bearer ${token}`
}

export const loginToGithub = code =>
  axios.get(`${process.env.AUTH_BASE_URL}?code=${code}`).then(response => {
    storeToken(response)
    window.history.replaceState({}, document.title, '/')
  })

export const userIsLoggedIn = () => localStorage.getItem('auth_token') && localStorage.getItem('auth_token') !== 'undefined'
