import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-assign',
  templateUrl: './template-driven-assign.component.html',
  styleUrls: ['./template-driven-assign.component.css']
})
export class TemplateDrivenAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:  NgForm): void {
    console.log(form);
      }
}
