
export interface CountedProduct{
    id: number
    name: string
    amount: number
    unit_price: number
    price: number
    img_url: string
}

export enum ResultsActionTypes{
    FETCH_REQUEST = '@@results/FETCH_REQUEST',
    FETCH_SUCCESS = '@@results/FETCH_SUCCESS',
    FETCH_ERROR = '@@results/FETCH_ERROR',
}

export interface ResultsState{
    readonly loading: boolean
    readonly data: CountedProduct[]
    readonly errors?:string
}