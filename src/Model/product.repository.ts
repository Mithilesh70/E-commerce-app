import { Injectable, OnInit } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository implements OnInit {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private datasource: StaticDataSource) {
    this.datasource.getProducts().subscribe((data) => {
      this.products = data;

      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort() as string[];
    });
  }

  ngOnInit(): void {}

  getProducts(category: string): Product[] {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }

  getProduct(id: number): Product {
    return this.products.find((p) => p.id == id) as Product;
  }

  getCategories(): string[] {
    return this.categories;
  }
}
