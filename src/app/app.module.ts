import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [AppComponent, CartSummaryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
