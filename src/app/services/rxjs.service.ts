import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor(private _httpClient:HttpClient) { }


  users:any[] = [
    { id:'101', name:'rushi',gender:'male'},
    {id:'102', name:'shri',gender:'female'},
    {id:'102',name:'madhav',gender:'male'}
  ]
}
