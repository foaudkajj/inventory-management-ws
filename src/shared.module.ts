import { CustomerInfoService } from './endpoints/customer-info/customer-info.service';
import { CustomerInfoRepository } from './endpoints/customer-info/customer-info.repository';
import { CustomerInfoController } from './endpoints/customer-info/customer-info.controller';
import { CustomerInfo } from 'src/models';
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
  imports: [TypeOrmModule.forFeature([Color,Currency,CustomerInfo])],
  controllers: [ColorController,CurrencyController,CustomerInfoController],
  providers: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,CustomerInfoRepository,CustomerInfoService],
  exports: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,CustomerInfoRepository,CustomerInfoService],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
