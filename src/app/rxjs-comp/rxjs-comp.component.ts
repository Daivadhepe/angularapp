import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';
import{filter, map, take, takeLast, toArray} from'rxjs/operators';
@Component({
  selector: 'app-rxjs-comp',
  templateUrl: './rxjs-comp.component.html',
  styleUrls: ['./rxjs-comp.component.css']
})
export class RxjsCompComponent implements OnInit {

  constructor(private _rxjsService:RxjsService) { }

  ngOnInit() {
    console.log('==============================map==========================');
    
 const data =from(this._rxjsService.users) ;
 data.pipe(
  map(x=>x.name + ' ' +'Patil')
 ).subscribe(res=>{
  console.log('example of rxjs map operator',res);
  
 })

//  data.subscribe(res=>{
//   console.log('example of rxjs from  operator',res);
  
//  }
console.log('===============================filter====================================');
const data1 =from(this._rxjsService.users) ;
data1.pipe(
  filter(z => z.gender =='male'),
   toArray()
).subscribe(res=>{
  console.log('filter operator use ',res);
  
})
console.log('================ Interval  rxjs ============================================');
const sourse = interval(1000);
console.log('===========take operator=====================');

sourse.pipe(
  take(10)).subscribe(res=>{
    console.log('interval example ',res);
    
  })
  console.log('============take last operator=============================');
  let randomsName = ['Daiva','Madhav','HTML','JAVA','TV','TYPESCRIPT'];
  const deta = from(randomsName);
  deta.pipe(
    takeLast(2)
  ).subscribe(res=>{
    console.log('take last operator use',res);
    
  })

}

}
