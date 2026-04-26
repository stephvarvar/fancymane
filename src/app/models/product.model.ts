export interface IProduct {
    key?: string | null;  // Optional key field, since Firebase keys are dynamic
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    items: string[];
    quantity: number;
}