export interface UserI {
    email: string;
    password: string;
}

export interface JwtUserI {
    body: {
        user: string;
        email: string;
        id_customer: string;
    }
}