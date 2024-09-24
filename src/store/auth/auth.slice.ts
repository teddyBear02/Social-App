import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '@/model'
import { signUp, login, logout } from './auth.actions'
import { clearAuthData, saveAuthData } from '@/helpers/auth.helper'

export const initialState : AuthState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
    },
  },

  extraReducers:(builder) => {
    builder
      .addCase(signUp.pending, (state) =>{
        state.loading = true
        state.isAuthenticated = false
      })

      .addCase(signUp.fulfilled, (state, action) =>{
        state.user = action.payload.user
        state.isAuthenticated = true
        state.loading = false
      })

      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false
        state.error = action.payload;
      })

    builder
      .addCase(login.pending , (state)=> {
        state.loading = true
        state.isAuthenticated = false
      }) 

      .addCase(login.fulfilled , (state , { payload })=> {
        state.loading = false
        state.isAuthenticated = true
        state.user = payload.result 
      }) 

      .addCase(login.rejected , (state)=> {
        state.loading = false
        state.isAuthenticated = false
      })
      
    builder  
      .addCase(logout.pending , (state)=> {
        state.loading = true
        state.isAuthenticated = false
      }) 

      .addCase(logout.fulfilled , (state , action)=> {
        state.loading = false
        clearAuthData()
      }) 

      .addCase(logout.rejected , (state)=> {
        state.loading = false
        state.isAuthenticated = false
      })
  }
})

// Call Api Login here: 

export const authAction = authSlice.actions // actions

export default authSlice.reducer // reducer 