import { Component, OnInit } from '@angular/core';
import { AssignService } from '../services/assign.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent implements OnInit {
  userName:any;
  constructor(private _assignService: AssignService) {
    this._assignService.userName.subscribe(res =>{
      this.userName=res;
     
      
    })
   }

  ngOnInit() {
  }


  updateEmployee(id,name,salary,company,city){
    console.log(this.userName);
    this._assignService.userName.next(id.value);
    this._assignService.userName.next(name.value);
    this._assignService.userName.next(salary.value);
    this._assignService.userName.next(company.value);
    this._assignService.userName.next(city.value);
  }
}
