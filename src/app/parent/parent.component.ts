import { Component, OnInit, Output,EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Output()  foodevent: EventEmitter<string> = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit() {

  }
  // function will called ones user enter text bax value
  addToFood(value){
    // foodEvent is nothig but custom event 
this.foodevent.emit(value)
  }

}
