import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-assign-output',
  templateUrl: './assign-output.component.html',
  styleUrls: ['./assign-output.component.css']
})
export class AssignOutputComponent implements OnInit {
 @Output() productDetails:EventEmitter<object> =  new EventEmitter<object>();
  
 array:Product[]=[
{srNo:1,productId:101,productName:'MacBook Pro', company:'Apple', price:112900 },
{srNo: 2,productId:102 ,productName:'Pavilion Thin & Light Laptop' ,company:'HP',  price:66990},
{srNo: 3,productId:103 ,productName:'Inspiron 5502 Laptop' ,company:'Dell', price:68990},
{srNo: 4,productId:104 ,productName:'Touchscreen Laptop' ,company:'Lenoo', price:759900},
 ]
  constructor() { }

  ngOnInit() {
  }
  getObject(){
    this .productDetails.emit(this.array)
  }
}
