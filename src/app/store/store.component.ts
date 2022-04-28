import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/Model/product.model';
import { ProductRepository } from '../../Model/product.repository';
import { Cart } from './cart.model';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  public selectedCategory!: string;
  public productsPerPage = 4;
  public selectedPage = 1;
  public test!: string;

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.test = localStorage.getItem('formData');
    console.log('test', this.test);
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    console.log(pageIndex);
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    //console.log(this.repository.getCategories());
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedPage = 1;
    this.selectedCategory = newCategory as string;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    //this.changeCategory(1);
  }

  get pageNumber(): number[] {
    return Array(
      Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
          this.productsPerPage
      )
    )
      .fill(0)
      .map((x, i) => i + 1);
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }
}
