import { Body, Controller, Post } from '@nestjs/common';
import { SaleService } from 'src/endpoints/sale/sale.service';
import { Sale, SalePaymentMethod, SaleProduct, SaleRequest } from 'src/models';
import { ClsService } from 'nestjs-cls';
import { v4 as uuidv4 } from 'uuid';
import { SaleProductService } from 'src/endpoints/sale-product/sale-product.service';
import { ProductService } from 'src/endpoints/product/product.service';
import { SalePaymentMethodService } from 'src/endpoints/sale-payment-method/sale-payment-method.service';
import { PaymentMethodService } from 'src/endpoints/payment-method/payment-method.service';
import { DataSource } from 'typeorm';

@Controller('api/selling')
export class SellingController {
    constructor(
        private readonly cls: ClsService,
        private readonly productService: ProductService,
        private readonly paymentMethodService: PaymentMethodService,
        public dataSource: DataSource,
    ) { }

    @Post('sellProducts')
    async sellProducts(@Body() saleRequest: SaleRequest) {
        const prices = saleRequest.products.map(
            x => x.sellingPrice * x.productCount,
        );
        const total = prices.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
        );
        const Products$ = this.productService.getByIds(saleRequest.products.map(x => x.productId));
        const PaymentMethods$ = this.paymentMethodService.getByIds(saleRequest.paymentMethods.map(x => x.paymentMethodId));
        const [productsFromDb, paymentMethodsFromDb] = await Promise.all([Products$, PaymentMethods$]);
        const totalAmount = saleRequest.paymentMethods
            .map(x => x.amount)
            .reduce((accumulator, currentValue) => accumulator + currentValue);
        const sellingPriceOfReq = saleRequest.products
            .map(x => x.sellingPrice)
            .reduce((accumulator, currentValue) => accumulator + currentValue);

        if (total <= 0) {
            throw new Error('selling-controller.total-not-valid');
        }
        if (
            totalAmount <= 0
        ) {
            throw new Error('selling-payment-method.amount-not-valid');
        }
        if (
            total !== totalAmount

        ) {
            throw new Error('selling-product.payments-non-valid');
        }
        if (
            saleRequest.products
                .map(x => x.productCount)
                .reduce((accumulator, currentValue) => accumulator + currentValue) < 1
        ) {
            throw new Error('selling-product.no-product-to-sale');
        }
        if (
            sellingPriceOfReq <= 0
        ) {
            throw new Error('product.selling-price-not-valid');
        }
        if (
            !productsFromDb
        ) {
            throw new Error('product.id-not-valid');
        }
        if (
            !paymentMethodsFromDb
        ) {
            throw new Error('selling-payment-method.id-not*valid');
        }
        const sale = new Sale();
        sale.branchId = await this.cls.get('user.branchId');
        sale.customerInfoId = 'cb79f4cb-fee4-4b9d-8721-74fc31946d73';
        sale.date = new Date(Date.now());
        sale.id = uuidv4();
        sale.merchantId = await this.cls.get('user.merchantId');
        sale.total = total;
        sale.userId = await this.cls.get('user.userId');

        const saleProducts: SaleProduct[] =
            saleRequest.products.map(product => {
                const saleProduct = new SaleProduct();
                saleProduct.id = uuidv4(),
                    (saleProduct.price = productsFromDb.find(
                        x => x.id == product.productId,
                    ).price),
                    saleProduct.productCount = product.productCount,
                    saleProduct.productId = product.productId,
                    saleProduct.saleId = sale.id,
                    saleProduct.sellingPrice = product.sellingPrice
                return saleProduct
            });
        const salepaymentMethods: SalePaymentMethod[] =
            saleRequest.paymentMethods.map(paymentmehod => {
                const salePaymentMethod = new SalePaymentMethod();
                if (paymentmehod.amount > 0) {
                    salePaymentMethod.id = uuidv4(),
                        salePaymentMethod.paymentMethodId =
                        paymentmehod.paymentMethodId,
                        salePaymentMethod.amount = paymentmehod.amount,
                        salePaymentMethod.saleId = sale.id;
                    return salePaymentMethod;
                }
            });
        await this.dataSource.manager.transaction(async (transactionalEntityManager) => {
            await transactionalEntityManager.save(sale)
            await transactionalEntityManager.save(saleProducts)
            await transactionalEntityManager.save(salepaymentMethods)
        });
    }
}
