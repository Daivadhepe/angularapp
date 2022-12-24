import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipeAssign1Service {

 userName = new BehaviorSubject('Async internally subscribe Observable and return the transmitted value .')

  constructor() { }

   getValue(){
    this.userName.subscribe(res=>{

    })
   }
}
