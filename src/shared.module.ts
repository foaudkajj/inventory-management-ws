import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ColorController} from './endpoints/color/color.controller';
import {ColorRepository} from './endpoints/color/color.repository';
import {ColorService} from './endpoints/color/color.service';
import { CurrencyController } from './endpoints/currency/currency.controller';
import { CurrencyRepository } from './endpoints/currency/Currency.repository';
import { CurrencyService } from './endpoints/currency/Currency.service';
import { PaymentMethodController } from './endpoints/payment-method/payment-method.controller';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import { PaymentMethodService } from './endpoints/payment-method/payment-method.service';
import {Color, Currency, PaymentMethod} from './models';

@Module({
  imports: [TypeOrmModule.forFeature([Color,Currency,PaymentMethod])],
  controllers: [ColorController,CurrencyController,PaymentMethodController],
  providers: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,PaymentMethodRepository,PaymentMethodService],
  exports: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,PaymentMethodRepository,PaymentMethodService],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
