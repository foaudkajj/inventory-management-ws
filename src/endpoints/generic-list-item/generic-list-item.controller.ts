import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {GenericListItem} from 'src/models';
import {GenericListItemService} from './generic-list-item.service';
import {FindManyOptions} from 'typeorm';

@Controller('api/genericListItems')
export class GenericListItemController {
  constructor(
    private readonly genericListItemService: GenericListItemService,
  ) {}

  @Get('get')
  getAll(
    @Query() options?: FindManyOptions<GenericListItem>,
  ): Promise<GenericListItem[]> {
    return this.genericListItemService.getAll(options);
  }

  @Post('insert')
  insert(@Body() row: GenericListItem) {
    return this.genericListItemService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: GenericListItem, @Param('id') id: string) {
    return this.genericListItemService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.genericListItemService.delete(id);
  }
}
