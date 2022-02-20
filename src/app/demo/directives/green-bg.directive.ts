import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[style-bg-green]'
})
export class GreenBgDirective implements OnInit {

  @Output('color-swapped') 
  emitter = new EventEmitter<string>();
  
  test: string = 'lol';
  

  constructor(private element: ElementRef) 
  { }

  ngOnInit(): void {
    setInterval(() => {
      let bg = this.element.nativeElement.style.backgroundColor;
      this.element.nativeElement.style.backgroundColor = bg == 'green' ? 'lightgreen' : 'green';
      this.emitter.emit(this.element.nativeElement.style.backgroundColor);
    },1000);
  }

}
