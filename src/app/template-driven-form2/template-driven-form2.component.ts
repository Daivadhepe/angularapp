import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from '../models/Address';
@Component({
  selector: 'app-template-driven-form2',
  templateUrl: './template-driven-form2.component.html',
  styleUrls: ['./template-driven-form2.component.css']
})
export class TemplateDrivenForm2Component implements OnInit {
  defaultValue:string=" Civil Engineer";
  defaultCourse:string="JAVA"
  
  address=new Address();
  submitted:boolean=false;
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
  ]
  defaultGender:string="Female"
  constructor() { }
  

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    
    this.submitted=true;

    this.address.country = form.value.country;
     this.address.State = form.value.State;
     this.address.City = form.value.City;
     this.address.Village = form.value.Village;
     this.address.PinCode = form.value.PinCode;
     
     console.log(form.controls);
     
    this.saveEmployeeData(this.address);
  }
    saveEmployeeData( add:Address){
     
      

    
  }

}