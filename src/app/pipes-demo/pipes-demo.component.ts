import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
 
 

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
 todaysDate = new Date();
 obser;
 price : number = 80000;
 obj = {id:'101', name:'text1'}
  constructor( private _utilityService: UtilityService ) {
  this.obser = this._utilityService.userName;
   }

  ngOnInit() {
  }

}
