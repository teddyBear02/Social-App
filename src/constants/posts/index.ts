import { User } from "@/constants/user"

export type PayLoadPost = {
    content: string,
}

export type PostList = {
    content: string,
    image: string,
    comment: string[],
    author: User
}

export type PostState = {
    posts: any[],
    loading: boolean
}