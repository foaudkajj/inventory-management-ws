import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {GenericList} from 'src/models';
import {GenericListService} from './generic-list.service';

@Controller('api/GenericLists')
export class GenericListController {
  constructor(private readonly GenericListService: GenericListService) {}

  @Get('get')
  getAll(): Promise<GenericList[]> {
    return this.GenericListService.getAll();
  }

  @Post('insert')
  insert(@Body() row: GenericList) {
    return this.GenericListService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: GenericList, @Param('id') id: string) {
    return this.GenericListService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.GenericListService.delete(id);
  }
}
