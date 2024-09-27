import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/Product.schema';
import { ProductMongooseRepository } from './repositories/mongoose/product.mongoose.repository';
import { ProductRepository } from './repositories/product.repository';
import { StockService } from './services/stock.service';
import { StockController } from './controller/stock.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [
    StockController
  ],
  providers: [
    { provide: ProductRepository, useClass: ProductMongooseRepository },
    StockService
  ],
})
export class StockModule {}
