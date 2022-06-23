export interface ProductI {
    _id?: string,
    name: string,
    link: string,
    mark: string,
    id_list: string,
    date_discharged: Date | null,
    status: boolean,
    name_list?: string
}

export interface ProductD {
    _id: string
}
export interface Product {
    id_customer: string
}

export interface JwtProductI {
    body: ProductI[]
}