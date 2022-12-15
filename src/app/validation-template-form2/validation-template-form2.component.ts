import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-template-form2',
  templateUrl: './validation-template-form2.component.html',
  styleUrls: ['./validation-template-form2.component.css']
})
export class ValidationTemplateForm2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.pastDateDisable();
  }

  minDate:any="2022-12-10";
pastDateDisable(){
  var date = new Date();
  console.log(date);
  
}


}
