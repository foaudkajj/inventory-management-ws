import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ColorController} from './endpoints/color/color.controller';
import {ColorRepository} from './endpoints/color/color.repository';
import {ColorService} from './endpoints/color/color.service';
import { CurrencyController } from './endpoints/currency/currency.controller';
import { CurrencyRepository } from './endpoints/currency/Currency.repository';
import { CurrencyService } from './endpoints/currency/Currency.service';
import { Customer_infoController } from './endpoints/customer_info/customer_info.controller';
import { Customer_infoRepository } from './endpoints/customer_info/customer_info.repository';
import { Customer_infoService } from './endpoints/customer_info/customer_info.service';
import {Color, Currency, Customer_info} from './models';

@Module({
  imports: [TypeOrmModule.forFeature([Color,Currency,Customer_info])],
  controllers: [ColorController,CurrencyController,Customer_infoController],
  providers: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,Customer_infoService,Customer_infoRepository],
  exports: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,Customer_infoService,Customer_infoRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
