import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
  ]
  notAllowedNames = ['CodeMind', 'Technology']
  submitted:boolean=false;
  myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
  }

  ngOnInit() {
    this.submitted=true;
    console.log(this.myReactiveForm);
    
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl('', [Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl('', [Validators.required, Validators.email]),
      }),

       'course': new FormControl('Angular'),
      'gender': new FormControl('Female'),
      'skills':new FormArray([
        new FormControl(null,Validators.required,)
      ])
    })
  }
  OnSubmit() {
    console.log(this.myReactiveForm);
    // var selectedValue="";
  }

  onAddSkills(){
    (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required,))
  }


  NaNames(control: FormControl) {
    //  this.notAllowednames = api/getNames
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { 'namesNotAllowed': true }
    }
    return null;
  }

   
//   getValueFromradio(value){
// console.log(value);

//   }
}
