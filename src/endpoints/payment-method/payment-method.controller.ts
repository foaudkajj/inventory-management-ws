import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {PaymentMethod} from 'src/models';
import {PaymentMethodService} from './payment-method.service';

@Controller('api/PaymentMethods')
export class PaymentMethodController {
  constructor(private readonly PaymentMethodService: PaymentMethodService) {}

  @Get('get')
  getAll(): Promise<PaymentMethod[]> {
    return this.PaymentMethodService.getAll();
  }

  @Post('insert')
  insert(@Body() row: PaymentMethod) {
    return this.PaymentMethodService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: PaymentMethod, @Param('id') id: string) {
    return this.PaymentMethodService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.PaymentMethodService.delete(id);
  }
}