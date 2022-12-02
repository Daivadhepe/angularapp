import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements  OnInit,OnChanges {
@Input() userid:number;
  constructor() {
    console.log(" HooksComponent constructor called");
    
   }
   //change input property then exicuted onChanges.
  ngOnChanges(changes: SimpleChanges): void {
       console.log("HooksComponent ngOnChanges called ");
     for(const propname in changes){
      const prop = changes[propname];

      const{ previousValue,currentValue,firstChange}=prop;
      console.log(`Prop name:- ${propname}`);
      console.log(`prev value:- ${ previousValue}`);
      console.log(`current value:- ${ currentValue} `);
      console.log(`firstChange:- ${ firstChange} `);
      console.log("------------------------------------");
      
      
      
     }
  }
// //hooks
  ngOnInit() {
     console.log(" HooksComponent ngOnInit called");
    
   }

}
