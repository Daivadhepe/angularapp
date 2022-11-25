import { Component, OnInit } from '@angular/core';
import { movie } from '../models/movies';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.css']
})
export class DemoDirectivesComponent implements OnInit {
isshow:boolean= true;
userName:boolean=false
title:string="Top 3 movies";
movies:movie[]=[
  { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007 '},
  { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
  { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'},
]
  constructor() { }

  ngOnInit() {
  }

}
