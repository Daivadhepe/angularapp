 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL = 'https://jsonplaceholder.typicode.com/';
   products = [
    {name:'Laptop' , id:'101'},
    {name:'Mobile', id:'102'},
    {name:'TV', id:'103'},
   ]

   emp = [
    {id:'1', name:'Daiva'},
    {id:'2', name:'Rushi'},
    {id:'3', name:'Shri'},
    {id:'4', name:'Madhav'},
   ]
  constructor(private http:HttpClient) { }

display(){
  alert('subscribe successfully');
}
getUsersData()
{
  let users = 'users'
  return this.http.get(this.apiURL+users);
}
getPosts(){
  let posts = 'posts'
  return this.http.get(this.apiURL+posts);
}

}
