import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignng-switch',
  templateUrl: './assignng-switch.component.html',
  styleUrls: ['./assignng-switch.component.css']
})
export class AssignngSwitchComponent implements OnInit {
selectProduct:string;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(value){
    console.log(value.target.value);
    this.selectProduct=value.target.value
    
  }

}
