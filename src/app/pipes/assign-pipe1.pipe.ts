import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignPipe1'
})
export class AssignPipe1Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
