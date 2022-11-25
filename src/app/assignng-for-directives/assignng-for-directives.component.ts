import { Component, OnInit } from '@angular/core';
import { student } from '../models/student';

@Component({
  selector: 'app-assignng-for-directives',
  templateUrl: './assignng-for-directives.component.html',
  styleUrls: ['./assignng-for-directives.component.css']
})
export class AssignngForDirectivesComponent implements OnInit {
tital:string="Top 5 student:-"
Person: student[]=[
  {srNumber:'1',name:'Daiva',education:'B.A',city:'Nanded',marks:'86.64'},
  {srNumber:'2',name:'Madhav',education:'B.E',city:'Pune',marks:'75'},
  {srNumber:'3',name:'Vivek',education:'B.S.C',city:'Narsi',marks:'86'},
  {srNumber:'4',name:'Shri',education:'SSC',city:'Kapsi',marks:'95'},
  {srNumber:'5',name:'Rushi',education:'HSC',city:'Kakandi',marks:'89'},
]
  constructor() { }

  ngOnInit() {
  }

}
