import { createSlice } from '@reduxjs/toolkit'
import { createComment, getCommentByPostId } from './comment.actions'
import { CommentInitState } from '@/model'

export const initialState : CommentInitState= {
    content: '',
    commentList: [],
    loading: false
}

export const commentSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(createComment.pending, (state)=>{
                state.loading = true
            })

            .addCase(createComment.fulfilled, (state, {payload})=>{
                state.loading = false
            })

            .addCase(createComment.rejected, (state)=>{
                state.loading = false
            })

        builder
            .addCase(getCommentByPostId.pending, (state)=>{
                state.loading = true
            })

            .addCase(getCommentByPostId.fulfilled, (state, {payload})=>{
                state.loading = false
            })

            .addCase(getCommentByPostId.rejected, (state)=>{
                state.loading = false
            })

        // builder
        //     .addCase(getPostByUserId.pending, (state)=>{
        //         state.loading = true
        //         state.posts = []
        //     })

        //     .addCase(getPostByUserId.fulfilled, (state, {payload})=>{
        //         state.loading = false
        //         state.posts = payload.result
        //     })

        //     .addCase(getPostByUserId.rejected, (state)=>{
        //         state.loading = false
        //     })

        // builder
        //     .addCase(deletePost.pending, (state)=>{
        //         state.loading = true
        //     })

        //     .addCase(deletePost.fulfilled, (state, {payload})=>{
        //         state.loading = false
        //         const index = state.posts.findIndex((x) => x.id === payload.result.id )
        //         state.posts = state.posts.splice(index, 1)
        //     })

        //     .addCase(deletePost.rejected, (state)=>{
        //         state.loading = false
        //     })

        // builder
        //     .addCase(updatePost.pending, (state)=>{
        //         state.loading = true
        //     })

        //     .addCase(updatePost.fulfilled, (state, {payload})=>{
        //         state.loading = false
        //         const index = state.posts.findIndex((x) => x.id === payload.result.id )
        //         state.posts = state.posts.splice(index, 1, payload.result)
        //     })

        //     .addCase(updatePost.rejected, (state)=>{
        //         state.loading = false
        //     })
    }
})

export const commentAction = commentSlice.actions

export default commentSlice.reducer
