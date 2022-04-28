import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from './order.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class OrderRepository {
  private order: order[] = [];

  constructor(private dataSource: StaticDataSource) {}

  getOrders(): order[] {
    return this.order;
  }

  saveOrder(order: order): Observable<order> {
    return this.dataSource.saveOrders(order);
  }
}
