import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo-enfant',
  templateUrl: './exo-enfant.component.html',
  styleUrls: ['./exo-enfant.component.css']
})
export class ExoEnfantComponent implements OnInit {

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
