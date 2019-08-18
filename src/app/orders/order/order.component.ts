import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/shared/customer.model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
customerList:Customer[];
  constructor(private service: OrderService, private dialog: MatDialog, private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomerList().then(res=>this.customerList as Customer[]);
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    debugger;
    if (form = null)
    form.resetForm();
  this.service.formData = {
    OrderID: null,
    OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
    CustomerID: 0,
    PMethod: '',
    GTotal: 0
  };
  this.service.orderItems = [];
  }

  AddOrEditOrderItem(OrderItemIndex, OrderID) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width = "50%";
    dialogconfig.data = { OrderItemIndex, OrderID };
    this.dialog.open(OrderItemsComponent, dialogconfig).afterClosed().subscribe(res=>{
      this.updateGrandTotal();
    });
  }
  onDeleteOrderItem(orderItemID:number,i:number){
    this.service.orderItems.splice(i,1);
    this.updateGrandTotal();
  }

  updateGrandTotal(){
   this.service.formData.GTotal = this.service.orderItems.reduce((prev,curr)=>{
      return prev+curr.Total;
    },0)
    this.service.formData.GTotal = parseFloat((this.service.formData.GTotal).toFixed(2));
  }
  
}
