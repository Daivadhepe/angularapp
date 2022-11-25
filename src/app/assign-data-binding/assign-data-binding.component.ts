import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-data-binding',
  templateUrl: './assign-data-binding.component.html',
  styleUrls: ['./assign-data-binding.component.css']
})
export class AssignDataBindingComponent   {
userName:any="Daivapatil123"
clear(){
  return this.userName=" "
}
  constructor() { 
setTimeout(() => {
  this.userName= " "
},  10000);
}
   

}
