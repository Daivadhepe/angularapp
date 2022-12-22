import { Component, OnInit } from '@angular/core';
import { Employeee } from '../models/emp';
import { AssignService } from '../services/assign.service';
 

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {
userName: Employeee;
  constructor(private _assignService: AssignService) { 
    this._assignService.userName.subscribe(res =>{
      this.userName=res;
  })
  }

  ngOnInit() {
  }

  updateEmployee(id,name,salary,company,city){
    console.log(this.userName);
    let objEmpoloyee = new Employeee();
    objEmpoloyee.id = id.value;
    objEmpoloyee.name = name.value;
    objEmpoloyee.salary = salary.value;
    objEmpoloyee.company = company.value;
   objEmpoloyee.city = city.value;


    this._assignService.userName.next(objEmpoloyee);
  }
}
