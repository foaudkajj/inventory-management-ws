import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {SalePaymentMethod} from 'src/models';
import {SalePaymentMethodService} from './sale-payment-method.service';

@Controller('api/SalePaymentMethods')
export class SalePaymentMethodController {
  constructor(private readonly salePaymentMethodService: SalePaymentMethodService) {}

  @Get('get')
  getAll(): Promise<SalePaymentMethod[]> {
    return this.salePaymentMethodService.getAll();
  }

  @Post('insert')
  insert(@Body() row: SalePaymentMethod) {
    return this.salePaymentMethodService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: SalePaymentMethod, @Param('id') id: string) {
    return this.salePaymentMethodService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.salePaymentMethodService.delete(id);
  }
}
