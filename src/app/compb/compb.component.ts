import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.css']
})
export class CompbComponent implements OnInit {
emp:any=[
  {empId:101,empName:'Rushi Dhepe',empCompany:'TCS',empSalary:50000},
  {empId:102,empName:'Shri Dhepe',empCompany:'INFO',empSalary:60000},
  {empId:103,empName:'Daiva Dhepe',empCompany:'Accenture',empSalary:70000},
  {empId:104,empName:'Madhav Kanole',empCompany:'TCS',empSalary:80000},
  {empId:105,empName:'Vivek Kanole',empCompany:'INFO',empSalary:40000},
]
  constructor(private _employeeService: EmployeeService) {
    this._employeeService.emp.subscribe(empValue=>{
      this.emp=empValue;
    })
   }

  ngOnInit() {
  }
UpdateEmpdata(){
  this._employeeService.emp.next(this.emp);
}
}
