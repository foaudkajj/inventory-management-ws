import { Injectable } from '@nestjs/common';
import { Product } from 'src/models';
import { ProductRepository } from './product.repository';
import { ClsService } from 'nestjs-cls';
import { Equal, In } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository, private readonly cls: ClsService) { }
  getAll(): Promise<Product[]> {
    return this.productRepository.orm.find();
  }

  insert(row: Product) {
    row.branchId = this.cls.get('user.branchId');
    return this.productRepository.orm.insert(row);
  }

  update(row: Partial<Product>, id: string) {
    row.branchId = this.cls.get('user.branchId');
    return this.productRepository.orm.update({ id: id }, row);
  }

  delete(id: string) {
    return this.productRepository.orm.delete({ id: id });
  }

  async getByBarcode(barcode: string): Promise<Product> {
    const product = await this.productRepository.orm.findOne({ where: { barcode: barcode } });
    return product;
  }
  getByIds(ids: string[]) {
    return this.productRepository.orm.findBy({ id: In(ids) })
  }
}
