import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "src/stock/schemas/Product.schema";
import { ProductRepository } from "../product.repository";

export class ProductMongooseRepository implements ProductRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createStock(product) {
    const newProduct = new this.productModel(product);

    await newProduct.save();
  }
  getStockById(productId) {
    return this.productModel.findById(productId).exec();
  }
  getAllStock(limit, page) {
    const offset = limit * (page - 1);
    return this.productModel.find().skip(offset).limit(limit).exec();
  }
  async updateStock(productId, stock) {
    await this.productModel.updateOne({ _id: productId }, { quantity: stock }).exec();
  }
  async deleteStock(productId) {
    await this.productModel.deleteOne({ _id: productId }).exec();
  }
}