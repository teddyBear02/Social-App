import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentPayload } from "@/model";
import axios from "axios";
import Cookies from "js-cookie";
import api from "@/api";

const base_url = process.env.NEXT_PUBLIC_BASE_URL
const token = Cookies.get("Token")


//* [GET] - Get posts by user id 
export const getCommentByPostId = createAsyncThunk('comment/get-comment-by-post-id', async( postId : string | number , thunkAPI )=>{
    try {
        const res = await api.get(`${base_url}/comments/${postId}`)
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        console.log(token)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


//* [POST] - Create new post
export const createComment = createAsyncThunk('comment/create-comment', async( payload : CommentPayload, thunkAPI)=>{
    const { userId, postId } = payload
    try {
        const res = await api.post(`${base_url}/comments/${postId}/${userId}`,payload)
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


// //* [PUT] - Update a post
export const updatePost = createAsyncThunk('post/update-post', async( comment: CommentPayload, thunkAPI )=>{
    try {
        const res  = await axios.put(`${base_url}/blog`, comment)
        return thunkAPI.fulfillWithValue(res.data)
    } catch ( error : any ) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})


// //* [DELETE] - Delete a post
// export const deletePost = createAsyncThunk('post/delete-post', async(id: number | string, thunkAPI)=>{
//     try {
//         const res : AxiosResponse<any, any> = await axios.delete(`${base_url}/blog/${id}`,
//             {
//                 withCredentials:true,
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             }
//         )
//         return thunkAPI.fulfillWithValue(res.data)
//     } catch ( error : any ) {
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// })