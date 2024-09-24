
export type PayloadSignUp = {
    email:string,
    password:string,
    name: string
}

export type UserLogin = {
    email: string,
    password: string,
}

export interface AuthState {
    loading: boolean
    isAuthenticated: boolean,
    error: Error | unknown ,
    user: PayloadSignUp | UserLogin | any
}

export type ResponseLogin = {
    token: string
    expires: string
    expiryIn: number
    refreshToken: string
    user: any
}

