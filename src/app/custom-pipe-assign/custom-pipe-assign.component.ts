 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-assign',
  templateUrl: './custom-pipe-assign.component.html',
  styleUrls: ['./custom-pipe-assign.component.css']
})
export class  CustomPipeAssignComponent implements OnInit {
  genderSearch:string='';
  employee: any[]=[
    {id:1,name:'Rushil',gender:'Male',DOB:'01-03-1990'},
    {id:2,name:'Pihu',gender:'Female',DOB:'07-05-1987'},
    {id:3,name:'Jayshri',gender:'Male',DOB:'01-03-1990'},
    {id:4,name:'Meera',gender:'Female',DOB:'06-08-1992'},
    {id:5,name:'Madhav',gender:'Male',DOB:'01-03-1985'},
    {id:6,name:'Kartik',gender:'Female',DOB:'01-03-1988'},

  ]

  constructor() { }

  ngOnInit() {
  }

}