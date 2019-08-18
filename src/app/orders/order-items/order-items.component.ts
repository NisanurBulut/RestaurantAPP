import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef}  from '@angular/material'
import { OrderItem } from 'src/app/shared/order-item.model';
import { ItemService } from 'src/app/shared/item.service';
import { Item } from 'src/app/shared/item.model';
import { NgForm } from '@angular/forms';
import { OrderService } from 'src/app/shared/order.service';
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
formData:OrderItem;
itemList:Item[];
constructor(
  @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<OrderItemsComponent>,
  private itemService: ItemService,
  private orderService:OrderService) { }
  

  ngOnInit() {
    this.itemService.getItemList().then(res => this.itemList = res as Item[]);
    if (this.data.orderItemIndex == null)
      this.formData = {
        OrderItemID: null,
        OrderID: this.data.OrderID,
        ItemID: 0,
        ItemName: '',
        Price: 0,
        Quantity: 0,
        Total: 0
      }
   
  }
  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Price = 0;
      this.formData.ItemName = '';
    }
    else {
      this.formData.Price = this.itemList[ctrl.selectedIndex - 1].Price;
      this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].Name;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));
  }

  onSubmit(form:NgForm){
    debugger;
this.orderService.orderItems.push(form.value);
//submit sonrası modal popup'ın kapanması içindir
this.dialogRef.close();
  }
}
