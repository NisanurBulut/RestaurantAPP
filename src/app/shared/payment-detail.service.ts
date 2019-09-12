import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  list:PaymentDetail[];
  constructor(private http:HttpClient) { }
  postPaymentDetail()
  {
    return this.http.post(environment.apiURL+'/PaymentDetails',this.formData);
  }
  putPaymentDetail()
  {
    return this.http.put(environment.apiURL+'/PaymentDetails/'+this.formData.PMId,this.formData);
  }
  deletePaymentDetail(id)
  {
    return this.http.delete(environment.apiURL+'/PaymentDetails/'+id);
  }
  refreshList(){
    return this.http.get(environment.apiURL+'/PaymentDetails')
    .toPromise()
    .then(res=>this.list=res as PaymentDetail[]);
  }

}
