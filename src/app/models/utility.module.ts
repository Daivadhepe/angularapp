import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { CustomDireDirective } from '../custom-dire.directive';
import { AssignCustomDireDirective } from '../assign-custom-dire.directive';



@NgModule({
  declarations: [
    CustomDireDirective,
    AssignCustomDireDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomDireDirective,
    AssignCustomDireDirective
  ]
})
export class UtilityModule { }
