import { createSlice } from '@reduxjs/toolkit'
import { createPost, getPost, deletePost, updatePost, getPostByUserId } from './post.actions'
import { PostState } from '@/model'
import { RootState } from '../store'

export const initialState : PostState= {
    posts: [],
    totalPage: 0,
    totalRecord: 0,
    loading: false
}

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(createPost.pending, (state)=>{
                state.loading = true
            })

            .addCase(createPost.fulfilled, (state, {payload})=>{
                state.loading = false
                state.posts = [...state.posts, payload.blog]
            })

            .addCase(createPost.rejected, (state)=>{
                state.loading = false
            })

        builder
            .addCase(getPost.pending, (state)=>{
                state.loading = true
            })

            .addCase(getPost.fulfilled, (state, {payload})=>{
                state.loading = false
                state.posts = payload.result
                state.totalPage = payload.totalPage
                state.totalRecord = payload.totalRecord
            })

            .addCase(getPost.rejected, (state)=>{
                state.loading = false
            })

        builder
            .addCase(getPostByUserId.pending, (state)=>{
                state.loading = true
                state.posts = []
            })

            .addCase(getPostByUserId.fulfilled, (state, {payload})=>{
                state.loading = false
                state.posts = payload.result
            })

            .addCase(getPostByUserId.rejected, (state)=>{
                state.loading = false
            })

        builder
            .addCase(deletePost.pending, (state)=>{
                state.loading = true
            })

            .addCase(deletePost.fulfilled, (state, {payload})=>{
                state.loading = false
                const index = state.posts.findIndex((x) => x.id === payload.result.id )
                state.posts = state.posts.splice(index, 1)
            })

            .addCase(deletePost.rejected, (state)=>{
                state.loading = false
            })

        builder
            .addCase(updatePost.pending, (state)=>{
                state.loading = true
            })

            .addCase(updatePost.fulfilled, (state, {payload})=>{
                state.loading = false
                const index = state.posts.findIndex((x) => x.id === payload.result.id )
                state.posts = state.posts.splice(index, 1, payload.result)
            })

            .addCase(updatePost.rejected, (state)=>{
                state.loading = false
            })
    }
})

export const selectPost = (state:RootState) => state.post

export const postAction = postSlice.actions

export default postSlice.reducer
