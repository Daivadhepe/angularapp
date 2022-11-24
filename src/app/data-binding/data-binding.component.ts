import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent  {
name:string= "CodemindTechnilogy";
count:number=10;
serverId:number=38;
serverStatus:string='offline';
allowNewServer:boolean=false;
imgUrl= 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
  
 
serverCreationStatus:string='Server not created'
serverName:string=' codemind.com143';



constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    },5000);
   }

   getserverStatus(){
    return this.serverStatus;
   }
   onCreateServer(){
    this. serverCreationStatus=' server created '
   }

}
