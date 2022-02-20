import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input()
  color: string = 'yellow';

  @Input('black-text')
  black: boolean = true;

  constructor(private element: ElementRef) {
    //element.nativeElement.style.backgroundColor = this.color;
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.color = this.black ? 'black' : 'white';
  }

  @HostListener('click') 
  onClick() {
    console.log("ok");
  }

}
