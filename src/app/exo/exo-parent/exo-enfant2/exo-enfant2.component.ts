import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo-enfant2',
  templateUrl: './exo-enfant2.component.html',
  styleUrls: ['./exo-enfant2.component.css']
})
export class ExoEnfant2Component implements OnInit {

  @Input('color-get')
  redAbove: boolean = false;

  @Output("color-send")
  emitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.emitter.emit(this.redAbove);
  }

}
