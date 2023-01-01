import { Component, OnInit } from '@angular/core';
import { News } from '../models/news';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi2',
  templateUrl: './rapidapi2.component.html',
  styleUrls: ['./rapidapi2.component.css']
})
export class Rapidapi2Component implements OnInit {
   arrNews:News[] = [];
  constructor(private _rapidAPIService:RapidapiService) { }

  ngOnInit() {
    this._rapidAPIService.getDataBBFinance().subscribe(res=>{
       console.log('rapid finance data',res);
       this.arrNews = res.news
      //  this.arrNews = res['news'];
      //  console.log('Dai test', this.arrNews);
   
   })
  }

}
