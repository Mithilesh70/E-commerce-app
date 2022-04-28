import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { StoreFirstGuard } from './storefirst.guard';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
         canActivate: [StoreFirstGuard],
      },

      {
        path: 'cart',
        component: CartDetailsComponent,
         canActivate: [StoreFirstGuard],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
         canActivate: [StoreFirstGuard],
      },

      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((mod) => mod.AdminModule),
         canActivate: [StoreFirstGuard],
      },

      { path: '**', redirectTo: '/store' },
    ]),
    BrowserModule,
    StoreModule,
  ],
  providers: [StoreFirstGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
