import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo-enfant1',
  templateUrl: './exo-enfant1.component.html',
  styleUrls: ['./exo-enfant1.component.css']
})
export class ExoEnfant1Component implements OnInit {

  @Input('color-get')
  redAbove: boolean = true;

  @Output("color-send")
  emitter = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.redAbove);
    
    this.emitter.emit(this.redAbove);
  }

}
