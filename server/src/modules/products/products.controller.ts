import { Controller, Get, Param } from '@nestjs/common';
import products, { Products } from '../../products';

@Controller('products')
export class ProductsController {
  constructor() { }

  @Get()
  async index(): Promise<Products[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string):Promise<Products>{
    return products.find((product) => product.id === parseInt(id))
  }
}
