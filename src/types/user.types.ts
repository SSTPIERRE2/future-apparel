export interface UserData {
    displayName: string;
    email: string;
}

export interface User extends UserData {
    id: string;
}
