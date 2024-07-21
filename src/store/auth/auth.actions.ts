import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from 'axios' 
import { SignUpUser, UserLogin } from "../../constants/auth";
import Cookies from 'js-cookie'

const base_url = process.env.NEXT_PUBLIC_BASE_URL

//*[POST] - SignUp
export const signUp = createAsyncThunk('auth/signUp', async (user:SignUpUser, thunkAPI) =>{
  try {
    const res : AxiosResponse<any, any> 
      = await axios.post(`${base_url}/register`,JSON.stringify(user),{
          withCredentials:true,
          headers: {
            'Content-Type': 'application/json'
          }
        }) 
    return thunkAPI.fulfillWithValue(res.data)
  } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
}) 

//*[POST] - Login
export const login = createAsyncThunk('auth/login', async (user:UserLogin, thunkAPI) =>{
  try {
    const res : AxiosResponse<any, any> 
      = await axios.post(`${base_url}/login`,JSON.stringify(user),{
          withCredentials:true,
          headers: {
            'Content-Type': 'application/json'
          }
        })

    if(res.status === 200){
      Cookies.set("Token",res.data?.token,{expires:3600})
      return thunkAPI.fulfillWithValue(res.data)
    }
  } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
}) 


//*[GET] - Logout
export const logout = createAsyncThunk('auth/logout', async (arg, thunkAPI) =>{
  try {
    const res : AxiosResponse<any, any> 
      = await axios.get(`${base_url}/logout`,{
          withCredentials:true,
          headers: {
            'Content-Type': 'application/json'
          }
        })

    if(res.status === 200){
      
      console.log(res)
      return res.data
    }
  } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);

  }
}) 