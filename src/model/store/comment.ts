import { PostType } from './posts'
import { User } from './user'

export type CommentType = {
    content : string
    author: User
    posts : PostType
}

export type CommentPayload = {
    content: string,
    postId: string | number,
    userId : string | number
}

export interface CommentInitState {
    commentList : CommentType[]
    content: string
    loading: boolean
}