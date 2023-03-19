import { CustomerInfoService } from './endpoints/customer-info/customer-info.service';
import { CustomerInfoRepository } from './endpoints/customer-info/customer-info.repository';
import { CustomerInfoController } from './endpoints/customer-info/customer-info.controller';
import { CustomerInfo } from 'src/models';
import { PaymentMethodService } from './endpoints/payment-method/payment-method.service';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import { PaymentMethodController } from './endpoints/payment-method/payment-method.controller';
import { PaymentMethod } from './models/payment-method.model';
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ColorController} from './endpoints/color/color.controller';
import {ColorRepository} from './endpoints/color/color.repository';
import {ColorService} from './endpoints/color/color.service';
import { CurrencyController } from './endpoints/currency/currency.controller';
import { CurrencyRepository } from './endpoints/currency/Currency.repository';
import { CurrencyService } from './endpoints/currency/Currency.service';
import {Color, Currency} from './models';

@Module({
  imports: [TypeOrmModule.forFeature([Color,Currency,PaymentMethod,CustomerInfo])],
  controllers: [ColorController,CurrencyController,PaymentMethodController,CustomerInfoController],
  providers: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,PaymentMethodRepository,PaymentMethodService,CustomerInfoRepository,CustomerInfoService],
  exports: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,PaymentMethodRepository,PaymentMethodService,CustomerInfoRepository,CustomerInfoService],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
