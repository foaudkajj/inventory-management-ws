import { CityService } from './endpoints/city/city.service';
import { CityRepository } from './endpoints/city/city.repository';
import { CityController } from './endpoints/city/city.controller';
import { City } from './models/city.model';
import { CountryService } from './endpoints/country/country.service';
import { CountryRepository } from './endpoints/country/country.repository';
import { CountryController } from './endpoints/country/country.controller';
import { Country } from './models/country.model';
import { PaymentMethodService } from './endpoints/payment-method/payment-method.service';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import { PaymentMethodController } from './endpoints/payment-method/payment-method.controller';
import { CustomerInfoService } from './endpoints/customer-info/customer-info.service';
import { CustomerInfoRepository } from './endpoints/customer-info/customer-info.repository';
import { CustomerInfoController } from './endpoints/customer-info/customer-info.controller';
import { CustomerInfo, PaymentMethod } from 'src/models';
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
  imports: [TypeOrmModule.forFeature([Color,Currency,CustomerInfo,PaymentMethod,Country,City])],
  controllers: [ColorController,CurrencyController,CustomerInfoController,PaymentMethodController,CountryController,CityController],
  providers: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,CustomerInfoRepository,CustomerInfoService,PaymentMethodRepository,PaymentMethodService,CountryRepository,CountryService,CityRepository,CityService],
  exports: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,CustomerInfoRepository,CustomerInfoService,PaymentMethodRepository,PaymentMethodService,CountryRepository,CountryService,CityRepository,CityService],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
