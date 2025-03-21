import { ViewInputProduct } from './view-input-product';

export interface ViewGetSale {
    id: number;
    saleNumber: number;
    date: Date;
    customer: string;
    total: number;
    branch: string;
    products: ViewInputProduct[];
    quantities: number;
    unitPrice: number;
    discounts: number;
    totalAmount: number;
    cancelled: boolean;
}