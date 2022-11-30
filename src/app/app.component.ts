import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  fromParentToChild = 'I am from parent component';
  data = {
    fullName: "Daivashala Gangadhar Dhepe",
    city: "Pune",
    Id: 101,
    age: 23,
    salary: 75000,
    dept: "HR"
  }
EmployeeRecords:any[]=[
  { eName:'Daiva',eCity:'Pune',eSalary:75000,eId:101,eCompany:'TCS'},
  {eName:'Madhav',eCity:'Nanded',eSalary:45000 ,eId:102,eCompany:'Wipro'},
  {eName:'Vivek',eCity:'Mumbai',eSalary:65000,eId:103,eCompany:'Info'},
]


  
}
