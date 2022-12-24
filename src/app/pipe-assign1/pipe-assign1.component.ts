import { Component, OnInit } from '@angular/core';
import { PipeAssign1Service } from '../services/pipe-assign-1.service';

@Component({
  selector: 'app-pipe-assign1',
  templateUrl: './pipe-assign1.component.html',
  styleUrls: ['./pipe-assign1.component.css']
})
export class PipeAssign1Component implements OnInit {
PresentDate = new Date();
 Name='Daivashala Gangadhar Dhepe';
price = 5000;
 observable;
 obj = [{  id:'1',name:'Daiva'},
 {id:'2' , name:'Pooja'},
 {id:'3',name:'Sita'}

 ]
  constructor( private _pipeassignService: PipeAssign1Service) {
this.observable = this._pipeassignService.userName;
   }

  ngOnInit() {
     

}
}