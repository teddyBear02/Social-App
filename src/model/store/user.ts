export enum RoleDataType  {
    ADMIN = "Admin",
    USER = "User"
}


export type User = {
    name: string,
    email: string,
    avatar: string,
    role: number,
}

