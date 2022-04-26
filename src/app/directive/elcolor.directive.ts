import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appElcolor]'
})
export class ElcolorDirective {

  constructor(el: ElementRef) {

    el.nativeElement.style.color="red"
   }

}


// custom directives 
// import elementRef from angular core its element refrence type
// put perameter in  constructor(el: ElementRef)
// make a directive functionality like this el.nativeElement.style.color="red"