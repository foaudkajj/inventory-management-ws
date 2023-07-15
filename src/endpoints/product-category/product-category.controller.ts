import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { ProductCategory } from 'src/models';
import { ProductCategoryService } from './product-category.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/productsCategories')
export class ProductCategoryController {
  constructor(private readonly productCategoryService: ProductCategoryService) { }

  @Get('get')
  getAll(): Promise<ProductCategory[]> {
    return this.productCategoryService.getAll();
  }

  @Post('insert')
  insert(@Body() row: ProductCategory) {
    return this.productCategoryService.insert(row);
  }

  @Put('update/:id')
  @ApiParam({ name: 'id' })
  update(@Body() row: ProductCategory, @Param('id') id: string) {
    return this.productCategoryService.update(row, id);
  }

  @Delete('delete/:id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    return this.productCategoryService.delete(id);
  }
}
