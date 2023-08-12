import {Body, Controller, Post} from '@nestjs/common';
import {SaleService} from 'src/endpoints/sale/sale.service';
import {Sale, SalePaymentMethod, SaleProduct, SaleRequest} from 'src/models';
import {ClsService} from 'nestjs-cls';
import {v4 as uuidv4} from 'uuid';
import {SaleProductService} from 'src/endpoints/sale-product/sale-product.service';
import {ProductService} from 'src/endpoints/product/product.service';
import {SalePaymentMethodService} from 'src/endpoints/sale-payment-method/sale-payment-method.service';
import {error} from 'console';
import {PaymentMethodService} from 'src/endpoints/payment-method/payment-method.service';

@Controller('api/selling')
export class SellingController {
  constructor(
    private readonly saleService: SaleService,
    private readonly cls: ClsService,
    private readonly saleProductService: SaleProductService,
    private readonly productService: ProductService,
    private readonly salePaymentMethodService: SalePaymentMethodService,
    private readonly paymentMethodService: PaymentMethodService,
  ) {}

  @Post('sellProducts')
  async sellProducts(@Body() saleRequest: SaleRequest) {
    const prices = saleRequest.products.map(
      x => x.sellingPrice * x.productCount,
    );
    const total = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
    const products = await this.productService.getAll();
    const sale = new Sale();
    const paymentMethods = await this.paymentMethodService.getAll();

    if (
      total ==
      saleRequest.paymentMethods
        .map(x => x.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue)
    ) {
      throw new error('selling-product.payments-non-valid');
    }

    if (total <= 0) {
      throw new error('selling-controller.total-not-valid');
    }
    
    if (
      saleRequest.products
        .map(x => x.productCount)
        .reduce((accumulator, currentValue) => accumulator + currentValue) >= 1
    ) {
      if (
        saleRequest.products
          .map(x => x.sellingPrice)
          .reduce((accumulator, currentValue) => accumulator + currentValue) > 0
      ) {
        if (
          saleRequest.paymentMethods
            .map(x => x.amount)
            .reduce((accumulator, currentValue) => accumulator + currentValue) >
          0
        ) {
          if (
            products
              .map(x => x.id)
              .includes(saleRequest.products.find(x => x).productId)
          ) {
            if (
              paymentMethods
                .map(x => x.id)
                .includes(
                  saleRequest.paymentMethods.find(x => x).paymentMethodId,
                )
            ) {
              sale.branchId = this.cls.get('user.branchId');
              sale.customerInfoId = 'cb79f4cb-fee4-4b9d-8721-74fc31946d73';
              sale.date = new Date(Date.now());
              sale.id = uuidv4();
              sale.merchantId = this.cls.get('user.merchantId');
              sale.total = total;
              sale.userId = this.cls.get('user.userId');
              this.saleService.insert(sale);

              saleRequest.products.map(product => {
                const saleProduct = new SaleProduct();
                (saleProduct.id = uuidv4()),
                  (saleProduct.price = products.find(
                    x => x.id == product.productId,
                  ).price),
                  (saleProduct.productCount = product.productCount),
                  (saleProduct.productId = product.productId),
                  (saleProduct.saleId = sale.id),
                  (saleProduct.sellingPrice = product.sellingPrice),
                  this.saleProductService.insert(saleProduct);
              });
              saleRequest.paymentMethods.map(paymentmehod => {
                const salePaymentMethod = new SalePaymentMethod();
                if (paymentmehod.amount > 0) {
                  (salePaymentMethod.id = uuidv4()),
                    (salePaymentMethod.paymentMethodId =
                      paymentmehod.paymentMethodId),
                    (salePaymentMethod.amount = paymentmehod.amount),
                    (salePaymentMethod.saleId = sale.id);
                  this.salePaymentMethodService.insert(salePaymentMethod);
                }
              });
            } else throw new error('selling-payment-method.id-not*valid');
          } else throw new error('product.id-not-valid');
        } else throw new error('selling-payment-method.amount-not-valid');
      } else throw new error('product.selling-price-not-valid');
    } else throw new error('selling-product.no-product-to-sale');
  }
}
