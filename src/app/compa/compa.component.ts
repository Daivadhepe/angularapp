import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.css']
})
export class CompaComponent implements OnInit {
  emp: any = [
    { empId: 201, empName: "Nisha Rawut", empCompany: 'TCS', empSalary: 600000 },
    { empId: 202, empName: "Jyoti Shighn", empCompany: 'CONGNIGENT', empSalary: 1300000 },
    { empId:203, empName: " Shitl Patil", empCompany: 'Infosys', empSalary: 800000 },
    { empId: 204, empName: "Daiva Patil", empCompany: 'Capgemini', empSalary: 1200000 },
    { empId: 205, empName: " Pawan KUmar", empCompany: 'Accenture', empSalary: 1000000 },

  ]
  constructor(private _employeeService: EmployeeService) { 
    this._employeeService.emp.subscribe(empValue=>{
      this.emp=empValue;
    })
  }

  ngOnInit() {
  }
  UpdateEmpdata(){
    this._employeeService.emp.next(this.emp);}
}
