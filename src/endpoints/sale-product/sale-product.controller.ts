import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {SaleProduct} from 'src/models';
import {SaleProductService} from './sale-product.service';

@Controller('api/SaleProducts')
export class SaleProductController {
  constructor(private readonly saleProductService: SaleProductService) {}

  @Get('get')
  getAll(): Promise<SaleProduct[]> {
    return this.saleProductService.getAll();
  }

  @Post('insert')
  insert(@Body() row: SaleProduct) {
    return this.saleProductService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: SaleProduct, @Param('id') id: string) {
    return this.saleProductService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.saleProductService.delete(id);
  }
}
