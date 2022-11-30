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



  
}
