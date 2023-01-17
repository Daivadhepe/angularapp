 


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../models/checkbox';
 
import { UserService } from '../services/user.service';
 

@Component({
  selector: 'app-checkbox-validation',
  templateUrl: './checkbox-validation.component.html',
  styleUrls: ['./checkbox-validation.component.css']
})
export class CheckboxValidationComponent implements OnInit {
  checkpassword: boolean = false;
  checkbox:boolean=false;
  myForm: FormGroup;

  constructor( private _userService:UserService) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.myForm = new FormGroup({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('codemindTechnology@gamil.com', [Validators.required, Validators.email]),
      'password': new FormControl('',),
      ' conformPassword':new FormControl('')
    });
  }
  onSubmit(){
    if(this.myForm.valid ==true)
    {
      alert('Call to server')
      console.log(this.myForm.value);
      let user = new Users();
      user.firstName = this.myForm['controls'].firstName.value;
      user.lastName = this.myForm['controls'].lastName.value;
      user.email = this.myForm['controls'].email.value;
      this._userService.saveUser(user);
      }
      else{
        alert('not called to server from invalid')
        console.log(this.myForm);
      }
    //console.log(this.myForm.value);
    
  }
  checkpass(pass,  conformPassword){
    console.log('checkpass', pass,  conformPassword);
    if(pass ==  conformPassword )
    {
      this.checkpassword = false;
    }
    else{
      this.checkpassword = true;
    }
  }
  checkboxxses(cdata){
    if(cdata!==null){
      this.checkbox=true;
    }else{
      this.checkbox=false;
    }
  }

}