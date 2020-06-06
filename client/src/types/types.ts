export type CartItemType = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    count: number
};

export type ProductType = {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
}

export type AuthStateType = {
    token: string | null,
    userId: string | null,
    isAuth : boolean
}

declare global {
    interface Window {
        M: any;
    }
}