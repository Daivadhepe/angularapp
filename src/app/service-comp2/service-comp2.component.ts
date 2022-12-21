import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-service-comp2',
  templateUrl: './service-comp2.component.html',
  styleUrls: ['./service-comp2.component.css']
})
export class ServiceComp2Component implements OnInit {
 Employee = {};
  constructor(private _demoService: DemoService) { }

  ngOnInit() {
    this.Employee = this._demoService.emp
  }

  OnSubscribe()
  {
   this._demoService.display();
      }
}
