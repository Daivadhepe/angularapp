import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-deletmethod',
  templateUrl: './deletmethod.component.html',
  styleUrls: ['./deletmethod.component.css']
})
export class DeletmethodComponent implements OnInit {

  constructor(private _postService:PostService) { }

  ngOnInit() {
  }
  DeletePost() {
    this._postService.deletePostById(1).subscribe(res=>{
      console.log( 'delete method learn' , res);
      
    })
    
   }
}
