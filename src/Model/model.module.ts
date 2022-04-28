import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { Cart } from '../app/store/cart.model';
import { order } from './order.model';
import { OrderRepository } from './order.repository';

@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    order,
    OrderRepository,
  ],
})
export class ModelModule {}
