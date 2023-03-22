import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {ApiParam} from '@nestjs/swagger';
import {Role} from 'src/models';
import {RoleService} from './role.service';

@Controller('api/Roles')
export class RoleController {
  constructor(private readonly RoleService: RoleService) {}

  @Get('get')
  getAll(): Promise<Role[]> {
    return this.RoleService.getAll();
  }

  @Post('insert')
  insert(@Body() row: Role) {
    return this.RoleService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({name: 'id'})
  update(@Body() row: Role, @Param('id') id: string) {
    return this.RoleService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({name: 'id'})
  delete(@Param('id') id: string) {
    return this.RoleService.delete(id);
  }
}
