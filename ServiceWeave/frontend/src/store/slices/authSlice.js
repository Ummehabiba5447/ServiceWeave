import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from '../../services/axiosClient'

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post('/auth/register', credentials)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      return data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.errors || error.response?.data?.message || 'Registration failed'
      )
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post('/auth/login', credentials)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      return data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.errors || error.response?.data?.message || 'Login failed'
      )
    }
  }
)

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await axiosClient.post('/auth/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return null
  } catch (error) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return null
  }
})

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosClient.get('/auth/me')
    return data.user
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch user')
  }
})

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.put('/auth/profile', profileData)
      localStorage.setItem('user', JSON.stringify(data.user))
      return data.user
    } catch (error) {
      return rejectWithValue(error.response?.data?.errors || error.response?.data?.message)
    }
  }
)

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (passwordData, { rejectWithValue }) => {
    try {
      const { data } = await axiosClient.post('/auth/change-password', passwordData)
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data?.errors || error.response?.data?.message)
    }
  }
)

const initialState = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
  success: false,
  isAuthenticated: !!localStorage.getItem('token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
        state.user = null
        state.token = null
        state.isAuthenticated = false
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    },

    clearError: (state) => {
        state.error = null
    },

    clearSuccess: (state) => {
        state.success = false
    },
},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.success = true
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
        state.isAuthenticated = true
        state.success = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Logout
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
        state.token = null
        state.isAuthenticated = false
        state.success = false
      })

      // Fetch Current User
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.loading = false
        state.user = null
        state.token = null
        state.isAuthenticated = false
      })

      // Update Profile
      .addCase(updateProfile.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.success = true
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      // Change Password
      .addCase(changePassword.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout, clearError, clearSuccess } = authSlice.actions;
export default authSlice.reducer
