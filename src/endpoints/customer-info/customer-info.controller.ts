import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {CustomerInfo} from 'src/models';
import {CustomerInfoService} from './customer-info.service';

@Controller('api/Customer_infos')
export class CustomerInfoController {
  constructor(private readonly Customer_infoService: CustomerInfoService) {}

  @Get('get')
  getAll(): Promise<CustomerInfo[]> {
    return this.Customer_infoService.getAll();
  }

  @Post('insert')
  insert(@Body() row: CustomerInfo) {
    return this.Customer_infoService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: CustomerInfo, @Param('id') id: string) {
    return this.Customer_infoService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.Customer_infoService.delete(id);
  }
}
