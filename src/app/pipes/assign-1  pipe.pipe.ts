import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignPipe1'
})
export class AssignPipe1Pipe implements PipeTransform {

  transform( val:any): any {
    return  val.toString().length;
  }
   

}
