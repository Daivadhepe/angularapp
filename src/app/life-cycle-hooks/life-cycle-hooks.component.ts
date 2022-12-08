import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges ,DoCheck  {
@Input() data:string;
  constructor() { 
    console.log("constructor called=============== ");
    
  }

  ngOnInit() {
    console.log("ngOnInit called =======================");
    
  }
   ngOnChanges(changes: SimpleChanges): void {
     console.log("ngOnChanges called ========================= ", changes );
     
   }
   ngDoCheck(): void {
     console.log("ngDoCheck called ==================");
     
   }

}
