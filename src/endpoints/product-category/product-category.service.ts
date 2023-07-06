import { Injectable } from '@nestjs/common';
import { ProductCategory } from 'src/models';
import { ProductCategoryRepository } from './product-category.repository';

@Injectable()
export class ProductCategoryService {
  constructor(private productCategoryRepository: ProductCategoryRepository) { }
  getAll(): Promise<ProductCategory[]> {
    return this.productCategoryRepository.orm.find();
  }

  insert(row: ProductCategory) {
    return this.productCategoryRepository.orm.insert(row);
  }

  update(row: Partial<ProductCategory>, id: string) {
    return this.productCategoryRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.productCategoryRepository.orm.delete({ id: id });
  }
}
