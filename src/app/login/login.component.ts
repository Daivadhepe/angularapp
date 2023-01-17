import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _route: Router,private _authService:AuthService) { }

  ngOnInit() {
  }

  checkUser(uname,password){


   var output =  this._authService.checkUserNameAndPassword(uname,password)
if(output == true){
  window.alert('login successfully')
  this._route.navigate(['product'])
}
else{
  window.alert('invalid username or password')
}


   // if ( uname=='admin' && password=='admin')
//  {
//   this._route.navigate(['product/laptop']);
// }
  }
}
