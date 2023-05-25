import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Sale} from 'src/models';
import {SaleService} from './sale.service';

@Controller('api/Sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get('get')
  getAll(): Promise<Sale[]> {
    return this.saleService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Sale) {
    return this.saleService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Sale, @Param('id') id: string) {
    return this.saleService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.saleService.delete(id);
  }
}
