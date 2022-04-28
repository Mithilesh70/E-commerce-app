import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { order } from './order.model';
import { Product } from './product.model';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Nike Xtreme', 'SportShoes', 'running shoes for men', 1000),
    new Product(2, 'Adidas Xtreme', 'shoes', 'running shoes for men', 2000),
    new Product(3, 'Newbalance Xtreme', 'shoes', 'running shoes for men', 3000),
    new Product(4, 'Reebok Xtreme', 'shoes', 'running shoes for men', 4000),
    new Product(5, 'Armour Xtreme', 'shoes', 'running shoes for men', 5000),
    new Product(6, 'Sparx Xtreme', 'shoes', 'running shoes for men', 6000),
    new Product(7, 'Puma Xtreme', 'shoes', 'running shoes for men', 7000),
    new Product(8, 'Nivea Xtreme', 'shoes', 'running shoes for men', 8000),
    new Product(9, 'Bata Xtreme', 'shoes', 'running shoes for men', 9000),
    new Product(10, 'Sketcher Xtreme', 'shoes', 'running shoes for men', 10000),
    new Product(11, 'Lavish Perfume', 'perfume', 'perfume for men', 1000),
    new Product(11, 'L96 Perfume', 'perfume', 'perfume for men', 1000),
    new Product(11, 'Adidas Perfume', 'perfume', 'perfume for men', 1000),
    new Product(11, 'Adidas Perfume', 'ladiesPerfume', 'perfume for men', 1000),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrders(order: order): Observable<order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
