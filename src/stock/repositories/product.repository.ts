import { IProduct } from '../schemas/models/Product.interface';

export abstract class ProductRepository {
  abstract createStock(product: IProduct): Promise<void>;
  abstract getStockById(productId: string): Promise<IProduct>;
  abstract getAllStock(limit: number, page: number): Promise<IProduct[]>;
  abstract updateStock(productId: string, stock: number): Promise<void>;
  abstract deleteStock(porductId: string): Promise<void>;
}
