import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
formData:Order;
orderItems:OrderItem[];
  constructor() { }
}
