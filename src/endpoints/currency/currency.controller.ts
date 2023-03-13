import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Currency} from 'src/models';
import {CurrencyService} from './Currency.service';

@Controller('api/Currencies')
export class CurrencyController {
  constructor(private readonly CurrencyService: CurrencyService) {}

  @Get('get')
  getAll(): Promise<Currency[]> {
    return this.CurrencyService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Currency) {
    return this.CurrencyService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Currency, @Param('id') id: string) {
    return this.CurrencyService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.CurrencyService.delete(id);
  }
}
