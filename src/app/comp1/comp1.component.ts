import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName;
  constructor(private _utilityService: UtilityService) { 
 this._utilityService.userName.subscribe(res =>{
  this.userName = res;
  console.log(res);
  
 })
  }

  ngOnInit() {
  }
  updateUserName(uname){
// console.log(uname.value);
let emp = {
  name:'Dnyanesh',
  id:'101'
}
this._utilityService.userName.next(JSON.stringify(emp));
// this._utilityService.userName.next(uname.value);
// next method is used to send massege to an obserable i.e userName
  }
}
