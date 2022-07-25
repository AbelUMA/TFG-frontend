import axios from 'axios'

const axiosAPI = axios.create({
  // baseURL: `${import.meta.env.BACKEND_URL}/api`,
  baseURL: 'http://localhost:4000/api',
})

export default axiosAPI
