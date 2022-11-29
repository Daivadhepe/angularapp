import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
colorVar:any="Blue";
people:any[]=[
  {"name":"Daiva",
"country":"UK"},
{"name":"Madhav",
"country":"USA"},
{ "name":"Vivek",
"country":"HK"},
{"name":"Meera",
"country":"UK"},
{"name":"Rushi",
"country":"USA"},
]
  constructor() { }

  ngOnInit() {
  }
 
}
