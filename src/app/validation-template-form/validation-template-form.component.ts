import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validation-template-form',
  templateUrl: './validation-template-form.component.html',
  styleUrls: ['./validation-template-form.component.css']
})
export class ValidationTemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.futureDateDisable();
   
  }


maxDate:any ;
futureDateDisable(){
  var date = new Date();
  var todayDate:any = date.getDate();
  var month:any = date.getMonth() + 1;
  var year:any = date.getFullYear();
  if ( todayDate < 10 ) {
  todayDate = '0'+ todayDate
  };
  if ( month <10) {
    month = '0' +month
  }
  this.maxDate = year + "-" + month + "-" + todayDate ;
  console.log(this.maxDate);
  }
Onsubmit( form:NgForm){
 console.log(form);
 }

}
