import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { PayloadSignUp, UserLogin } from "@/model";
import { StorageKey } from "@/constants";
import api from "@/api";

const base_url = process.env.NEXT_PUBLIC_BASE_URL

//*[POST] - SignUp
export const signUp = createAsyncThunk('auth/signUp', async (user : PayloadSignUp, thunkAPI) =>{
  try {
    const res = await api.post(`${base_url}/register`,user) 
    return thunkAPI.fulfillWithValue(res.data)
  } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
}) 

//*[POST] - Login
export const login = createAsyncThunk('auth/login', async (user : UserLogin, thunkAPI) =>{
  try {
    const res = await api.post(`${base_url}/login`,user)

    if(res.status === 200){
      return thunkAPI.fulfillWithValue(res.data)
    }
  } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
}) 


//*[GET] - Logout
export const logout = createAsyncThunk('auth/logout', async (arg, thunkAPI) =>{
  try {
    const res = await api.get(`${base_url}/logout`)
    if(res.status === 200){
      return res.data
    }
  } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
}) 