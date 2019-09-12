import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  constructor() { }
}
