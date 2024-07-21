import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { PayLoadPost } from "@/constants/posts";
import Cookies from "js-cookie";

const base_url = process.env.NEXT_PUBLIC_BASE_URL
const token = Cookies.get("Token")


//* [GET] - Get posts
export const getPost = createAsyncThunk('post/get-posts', async( arg , thunkAPI )=>{
    try {
        const res = await axios.get(`${base_url}/blogs`,
            {
                withCredentials:true,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        console.log(token)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//* [POST] - Create new post
export const createPost = createAsyncThunk('post/create-post', async(post:string, thunkAPI)=>{
    try {
        const res : AxiosResponse<any, any> = await axios.post(`${base_url}/blog`,JSON.stringify(post),
            {
                withCredentials:true,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        )
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//* [PUT] - Update a post
export const updatePost = createAsyncThunk('post/update-post', async(post:PayLoadPost, thunkAPI)=>{
    try {
        const res : AxiosResponse<any, any> = await axios.put(`${base_url}/blog`,post,
            {
                withCredentials:true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//* [DELETE] - Delete a post
export const deletePost = createAsyncThunk('post/delete-post', async(id: number | string, thunkAPI)=>{
    try {
        const res : AxiosResponse<any, any> = await axios.delete(`${base_url}/blog/${id}`,
            {
                withCredentials:true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})