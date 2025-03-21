import { Rating } from "./rating";

export interface ViewInputProduct {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    ratings?: Rating[];
}