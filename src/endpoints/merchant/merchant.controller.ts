import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Merchant} from 'src/models';
import {MerchantService} from './merchant.service';

@Controller('api/Merchants')
export class MerchantController {
  constructor(private readonly MerchantService: MerchantService) {}

  @Get('get')
  getAll(): Promise<Merchant[]> {
    return this.MerchantService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Merchant) {
    return this.MerchantService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Merchant, @Param('id') id: string) {
    return this.MerchantService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.MerchantService.delete(id);
  }
}
