import { Rating } from './rating';

export interface ViewGetProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    ratings?: Rating[];
}