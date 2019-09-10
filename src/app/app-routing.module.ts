import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './orders/order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'order', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'paymentdetails', component: PaymentDetailsComponent },
  {
    path: 'order', children: [
      { path: '', component: OrderComponent },
      { path: 'edit/:id', component: OrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
