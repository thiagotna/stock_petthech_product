import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';
import { IProduct } from '../schemas/models/Product.interface';

@Injectable()
export class StockService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllStock(limit: number, page: number) {
    return this.productRepository.getAllStock(limit, page);
  }

  async getStockById(productId: string) {
    const product = await this.productRepository.getStockById(productId);
    if (!product) throw new NotFoundException('Product not found');
    return this.productRepository.getStockById(productId);
  }

  async createStock(product: IProduct) {
    return this.productRepository.createStock(product);
  }

  async updateStock(productId: string, stock: number) {
    return this.productRepository.updateStock(productId, stock);
  }

  async deleteStock(productId: string) {
    return this.productRepository.deleteStock(productId);
  }
}
