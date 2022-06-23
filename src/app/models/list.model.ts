export interface ListI {
    name: string,
    id_customer: string
}

export interface ListJwt {
    _id: string,
    name: string
}

export interface JwtVimeoUploadI {
    body: ListJwt[]
}