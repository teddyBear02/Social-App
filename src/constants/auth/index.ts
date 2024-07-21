export type SignUpUser = {
    Email:string,
    Password:string,
    Name: string
}

export type UserLogin = {
    Email:string,
    Password:string,
}

export interface AuthState {
    loading: boolean
    isAuthenticated: boolean,
    error: Error | unknown ,
    user: SignUpUser | UserLogin | any
}

