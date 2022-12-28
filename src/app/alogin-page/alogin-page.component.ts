import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alogin-page',
  templateUrl: './alogin-page.component.html',
  styleUrls: ['./alogin-page.component.css']
})
export class AloginPageComponent implements OnInit {

  constructor( private _route: Router) { }

  ngOnInit() {
  }

  checkUser(uname,password){
    if ( uname=='patil' && password=='patil')
     {
      this._route.navigate(['aproduct/toys']);
    }
      }
}
