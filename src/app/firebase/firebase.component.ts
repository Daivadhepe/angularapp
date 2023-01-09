import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private _firebaseService:FirebaseService) { }

  ngOnInit(){
this._firebaseService.getPostDataFirebase().pipe(
  map(responseData=>{
    const postArray = [];
     for(const key in responseData){
      if(responseData.hasOwnProperty(key)){
        postArray.push({...responseData[key],id:key})
      }
     }
     return postArray;
  } )
)
.subscribe(res=>{
  console.log(' getting data After manipulate data ',res);
  
})
  }
  
  createPost(){
    this._firebaseService.createPost().subscribe(res=>{
      console.log('firebase post data',res);
      
    })
  }
}
