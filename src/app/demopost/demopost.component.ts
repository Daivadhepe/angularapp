import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  constructor(private _postService:PostService) { }
arrPosts:Post[] = []
  ngOnInit() {
    this._postService.getPosts().subscribe(res=>{
      // console.log('get data from jsonplaceholder',res);
      this.arrPosts =  res;
    })
  }

}
