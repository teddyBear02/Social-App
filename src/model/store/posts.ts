export type PostType = {
    id: string
    content: string,
    image: string | null,
    comment: [],
    author: string,
    createAt: string,
    updateAt: string
}

export type PayloadPost = {
    content: string,
}

export type PostState = {
    posts: PostType[],
    totalRecord: number,
    totalPage: number,
    loading: boolean
}