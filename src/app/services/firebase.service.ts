import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebasePost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url = 'https://angular-crud-ed455-default-rtdb.firebaseio.com/';

  constructor(private _httpClient:HttpClient) { }

  

  createPost(){
    let postData = {
      title:'this is angular 8 crud',
      content:'this is firebase crud operation with post'
    }

    return this._httpClient.post(this.url +'posts.json', postData);
  }
  createPostDataReactiveForm(fireBasePost:FirebasePost)
  {
    return this._httpClient.post(this.url +'posts.json',fireBasePost );
  }
  getPostDataFirebase(){
    return this._httpClient.get(this.url+'posts.json');
  }
}
