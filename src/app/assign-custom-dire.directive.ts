import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAssignCustomDire]'
})
export class AssignCustomDireDirective {

  constructor(private el:ElementRef,private render:Renderer2 ) { 
    console.log('custom directive applied');
    
    render.setStyle(el.nativeElement,'backgroundColor','green')
  }

}
  