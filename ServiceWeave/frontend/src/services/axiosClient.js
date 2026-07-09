import axios from 'axios'


const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const refreshToken = localStorage.getItem('refresh_token')
        if (refreshToken) {
          const { data } = await axios.post(
            `${API_BASE_URL}/auth/refresh`,
            {},
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          )

          localStorage.setItem('token', data.token)
          axiosClient.defaults.headers.Authorization = `Bearer ${data.token}`

          return axiosClient(originalRequest)
        }
      } catch (err) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
}
    }

    return Promise.reject(error)
  }
)

export default axiosClient
