import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appChildText]'
})
export class ChildTextDirective implements OnInit {

  @Input()
  childText?: string;

  @Output('cpt-child')
  emitter = new EventEmitter<boolean>();
  


  constructor(private element: ElementRef) {
      
  }

  ngOnInit(){
    this.createChild();
  }

  createChild(){
    const newP = document.createElement('p');
    newP.innerText = this.childText ? this.childText : 'bonjour';
    newP.onclick = () => this.createChild();   
    this.element.nativeElement.appendChild(newP);
    this.emitter.emit();
   
  }

}
