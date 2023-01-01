import { Component } from '@angular/core';
import { DemoService } from './services/demo.service';
import { PostService } from './services/post.service';
 
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  array=[];
constructor(private _demoService: DemoService,private _postService:PostService){

}
ngOnInit():void {
  this._demoService.getUsersData().subscribe(data =>{
    console.log('getting data from getUsersData', data);
    this.array.push(data);
 })

 this._demoService.getPosts().subscribe(result =>{
  console.log('getting data from getPosts',result);
  
 })
 
}








  value:string
  public uid:number;
  title = 'angularapp';
  fromParentToChild = 'I am from parent component';
  data = {
    fullName: "Daivashala Gangadhar Dhepe",
    city: "Pune",
    Id: 101,
    age: 23,
    salary: 75000,
    dept: "HR"
  }
EmployeeRecords:any[]=[
  { eName:'Daiva',eCity:'Pune',eSalary:75000,eId:101,eCompany:'TCS'},
  {eName:'Madhav',eCity:'Nanded',eSalary:45000 ,eId:102,eCompany:'Wipro'},
  {eName:'Vivek',eCity:'Mumbai',eSalary:65000,eId:103,eCompany:'Info'},
]
foods:string[]=[];
 
getDataFromChild(value){
  console.log(value);
  this.foods.push(value);
}
getDtaFromOnput(value){
console.log(value);
this.array=value;

}
submitValue(val ){
  this.value =  val.value;
}
DeletePost() {
  this._postService.deletePostById(1).subscribe(res=>{
    console.log( 'delete method learn' , res);
    
  })
  
 }

}
