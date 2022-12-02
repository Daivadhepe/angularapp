import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-derevtives-assign',
  templateUrl: './derevtives-assign.component.html',
  styleUrls: ['./derevtives-assign.component.css']
})
export class DerevtivesAssignComponent implements OnInit {
  showSecret = false;
  log = [];
    constructor() { }
  
    ngOnInit() {
    }
    onToggleDetails() {
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length + 1) ;
    }
  
}
