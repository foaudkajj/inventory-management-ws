import { Entity } from "typeorm";

@Entity()
export class SaleRequest {
    customerInfoId?: string; // the id of the customer info (if available). for now set to null
    products: SaleProductRequest[];
    paymentMethods: PaymentMethodRequest[];
}

@Entity()
export class SaleProductRequest {
    productId: string;
    productCount: number;
    sellingPrice: number;
}

@Entity()
export class PaymentMethodRequest {
    paymentMethodId: string;
    amount: number;
}