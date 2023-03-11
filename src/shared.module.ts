import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ColorController} from './endpoints/color/color.controller';
import {ColorRepository} from './endpoints/color/color.repository';
import {ColorService} from './endpoints/color/color.service';
import {Color} from './models';

@Module({
  imports: [TypeOrmModule.forFeature([Color])],
  controllers: [ColorController],
  providers: [ColorService, ColorRepository],
  exports: [ColorService, ColorRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
