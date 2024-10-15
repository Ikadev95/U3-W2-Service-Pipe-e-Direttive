import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ref: ElementRef) { }
  ngOnInit(){

    let randomColor: string = Math.floor(Math.random()*16777215).toString(16);
    this.ref.nativeElement.style.color = '#'+randomColor
  }


}
