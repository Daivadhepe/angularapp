import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/User';
@Component({
  selector: 'app-template-form3',
  templateUrl: './template-form3.component.html',
  styleUrls: ['./template-form3.component.css']
})
export class TemplateForm3Component implements OnInit {
  defaultsub:string ='Advance';

  data = new User();
  submitted:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
console.log(form);
this.submitted = true;
this.data.name =  form.value.name;
this.data.email = form.value.email;
this.data.sub = form.value.sub;
this.data.pass = form.value.pass;
console.log(form.controls);

this.saveData(this.data);
  }
  saveData(d:User){

  }
}
