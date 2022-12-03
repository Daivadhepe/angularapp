import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-remove-assign',
  templateUrl: './add-remove-assign.component.html',
  styleUrls: ['./add-remove-assign.component.css']
})
export class AddRemoveAssignComponent implements OnInit {
  actorName:string="Enter Actor Name "

actorList  =[];
  constructor() { }

  ngOnInit() {
  }
  onClick(myUser){
    if (myUser.value.length>0 ) {
      this.actorList.push(myUser.value)
   myUser.value=" ";
    }
   
    
  }
  onDelete(deleteme){
    this.actorList.splice(deleteme,1)
  }
}
