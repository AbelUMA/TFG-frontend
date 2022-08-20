import axios from 'axios'

const axiosAPI = axios.create({
  baseURL: 'http://localhost:4000/api',
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJub21icmUiOiJBYmVsIiwicHJveWVjdG8iOiJURkciLCJpYXQiOjE1MTYyMzkwMjJ9.S7L4d2pMJWj3LnJhUhcF8gZkSYdvzVmoGMTjEjLqPAg',
  },
})

export default axiosAPI
