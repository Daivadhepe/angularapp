import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
 URL = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  constructor(private httpClient:HttpClient) { }

  getDataBBFinance():Observable<any>{
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'ecf5c93924msh0826144e2fafc4ap115f27jsn2944bedd0246',
    })
return this.httpClient.get(this.URL,{headers:headers});
  }
}
