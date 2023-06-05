import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { Color } from 'src/models';
import { ColorService } from './color.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) { }

  @UseGuards(AuthGuard)
  @Get('get')
  getAll(): Promise<Color[]> {
    return this.colorService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Color) {
    return this.colorService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: Color, @Param('id') id: string) {
    return this.colorService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.colorService.delete(id);
  }
}
