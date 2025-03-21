import { ViewGetProduct } from './view-get-product';

export interface ViewInputSale {
    saleNumber: number;
    date: Date;
    customer: string;
    total: number;
    branch: string;
    products: ViewGetProduct[];
    quantities: number;
    unitPrice: number;
    discounts: number;
    totalAmount: number;
    cancelled: boolean;
}