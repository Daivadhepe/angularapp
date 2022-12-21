import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-service-comp1',
  templateUrl: './service-comp1.component.html',
  styleUrls: ['./service-comp1.component.css']
})
export class ServiceComp1Component implements OnInit {
  productss = {};
  Employee = {};
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.productss = this._demoService.products;
    this.Employee = this._demoService.emp;
  }


  OnSubscribe() 
  {
 this._demoService.display();
  }
}
