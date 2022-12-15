import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reuderadio',
  templateUrl: './reuderadio.component.html',
  styleUrls: ['./reuderadio.component.css']
})
export class ReuderadioComponent implements OnInit {
  defaultValue:string="HTML"
  constructor() { }

  ngOnInit() {
  }
  @Output() getSelectedCourse: EventEmitter<any> = new EventEmitter<any>();
  getSelectedValue(value){
    this.getSelectedCourse.emit(value);
  }
  }
 
