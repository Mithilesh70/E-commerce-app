import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { order } from 'src/Model/order.model';
import { OrderRepository } from 'src/Model/order.repository';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;
  textData!: string;

  constructor(public repository: OrderRepository, public order: order) {}

  ngOnInit(): void {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }

 
}
