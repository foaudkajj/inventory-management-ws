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
  imports: [TypeOrmModule.forFeature([Color,Currency])],
  controllers: [ColorController,CurrencyController],
  providers: [ColorService, ColorRepository,CurrencyRepository,CurrencyService],
  exports: [ColorService, ColorRepository,CurrencyRepository,CurrencyService],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
