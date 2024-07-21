import { createSlice } from '@reduxjs/toolkit'
import { createPost, getPost } from './post.actions'
import { PostState } from '@/constants/posts'

export const initialState : PostState= {
    posts: [],
    loading: false
}

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{

    },

    extraReducers:(builder) =>{
        builder
            .addCase(createPost.pending, (state)=>{
                
            })

            .addCase(createPost.fulfilled, (STATE, PAYLOAD)=>{
                STATE.posts = [...STATE.posts, PAYLOAD.payload]
            })

            .addCase(createPost.rejected, (state)=>{
                
            })

        builder
            .addCase(getPost.pending, (state)=>{
                state.loading = true
            })

            .addCase(getPost.fulfilled, (state, action)=>{
                state.loading = false
                state.posts = action.payload.blogs
            })

            .addCase(getPost.rejected, (state)=>{
                state.loading = false
            })
    }
})

export const postAction = postSlice.actions

export default postSlice.reducer
