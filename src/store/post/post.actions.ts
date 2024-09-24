import api from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadPost } from "@/model"; 
import { PaginationPayload } from "@/model/pagination";

const base_url = process.env.NEXT_PUBLIC_BASE_URL

//* [POST] - Get posts
export const getPost = createAsyncThunk('post/get-posts', async( payload : PaginationPayload , thunkAPI )=>{
    const { pagination } = payload
    try {
        const res = await api.post(`${base_url}/blogs`, {pagination})
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

//* [GET] - Get posts by user id 
export const getPostByUserId = createAsyncThunk('post/get-posts-by-user-id', async( userId : string , thunkAPI )=>{
    try {
        const res = await api.get(`${base_url}/blog/${userId}`)
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//* [POST] - Create new post
export const createPost = createAsyncThunk('post/create-post', async(post:string, thunkAPI)=>{
    try {
        const res = await api.post( `${base_url}/blog`, post )
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//* [PUT] - Update a post
export const updatePost = createAsyncThunk('post/update-post', async(post:PayloadPost, thunkAPI)=>{
    try {
        const res  = await api.put( `${base_url}/blog`, post )
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//* [DELETE] - Delete a post
export const deletePost = createAsyncThunk('post/delete-post', async(id: number | string, thunkAPI)=>{
    try {
        const res = await api.delete(`${base_url}/blog/${id}`)
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})