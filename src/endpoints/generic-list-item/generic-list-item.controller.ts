import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {GenericListItem} from 'src/models';
import {GenericListItemService} from './generic-list-item.service';

@Controller('api/genericListItems')
export class GenericListItemController {
  constructor(private readonly GenericListItemService: GenericListItemService) {}

  @Get('get')
  getAll(): Promise<GenericListItem[]> {
    return this.GenericListItemService.getAll();
  }

  @Post('insert')
  insert(@Body() row: GenericListItem) {
    return this.GenericListItemService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: GenericListItem, @Param('id') id: string) {
    return this.GenericListItemService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.GenericListItemService.delete(id);
  }
}
