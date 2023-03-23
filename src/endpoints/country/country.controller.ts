import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Country} from 'src/models';
import {CountryService} from './country.service';

@Controller('api/Countries')
export class CountryController {
  constructor(private readonly CountryService: CountryService) {}

  @Get('get')
  getAll(): Promise<Country[]> {
    return this.CountryService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Country) {
    return this.CountryService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Country, @Param('id') id: string) {
    return this.CountryService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.CountryService.delete(id);
  }
}
