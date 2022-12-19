import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-assign',
  templateUrl: './reactive-form-assign.component.html',
  styleUrls: ['./reactive-form-assign.component.css']
})
export class ReactiveFormAssignComponent implements OnInit {
  myReactiveAssignForm:FormGroup
  constructor() {
    this.formAssign()
   }

  ngOnInit() {
  }
  formAssign(){
     this.myReactiveAssignForm = new FormGroup({
      'firstName':new FormControl('',[Validators.required,Validators.maxLength(5),Validators.minLength(5)] ),
      'lastName':new FormControl('',[Validators.required,Validators.maxLength(10),]),
      'age':new FormControl('', [Validators.required, ]),
      'email':new FormControl('',[Validators.required,Validators.email]),
     })
  }
  onSubmit(){
    console.log(this.myReactiveAssignForm);
    
  }
}
