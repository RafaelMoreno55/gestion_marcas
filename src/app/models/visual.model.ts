export interface VisualI {
    _id?: string,
    typography_1: string,
    typography_2: string,
    colors: string[] | string,
    splash?: string,
    header?: string,
    miniature?: string,
    principal?: string
}

export interface JwtVisualI {
    body: VisualI[]
}