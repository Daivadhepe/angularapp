import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCuctom]'
})
export class CuctomDirective {

  constructor( private el:ElementRef , private render:Renderer2) {
    // console.log('custom directives applied');
   // el.nativeElement.style.backgroundColor='brown';
// el.nativeElement.style.display='none';
render.setStyle(el.nativeElement,'backgroundColor','yellow')

   }

}
