import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  
  constructor(private http:HttpClient) { }
  postPaymentDetail(formData:PaymentDetail)
  {
    return this.http.post(environment.apiURL+'/PaymentDetails',formData);
  }
  refreshList(){
    return this.http.get(environment.apiURL+'PaymentDetails').toPromise();
  }
}
