export interface VimeoI {
    id: string,
    name: string,
    link: string,
    date: Date,
    author: string,
    state: string,
    picture: string,
}
export interface VimeoUploadI {
    name: string,
    description: string,
    video: File
}
export interface JwtVimeoUploadI {
    body: {
        link: string
    }
}

export interface JwtVimeoI {
    body: VimeoI[]
}