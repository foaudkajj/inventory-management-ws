import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Customer_info} from 'src/models';
import {Customer_infoService} from './customer_info.service';

@Controller('api/Customer_infos')
export class Customer_infoController {
  constructor(private readonly Customer_infoService: Customer_infoService) {}

  @Get('get')
  getAll(): Promise<Customer_info[]> {
    return this.Customer_infoService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Customer_info) {
    return this.Customer_infoService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Customer_info, @Param('id') id: string) {
    return this.Customer_infoService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.Customer_infoService.delete(id);
  }
}
