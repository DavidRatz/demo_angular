import { Component, OnInit } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Component({
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {
  timeInterval: any;
  chrono: Chrono = {
    minutes: 0,
    secondes: 0
  }

  isPlayBtnDisabled: boolean= false;
  isPauseBtnDisabled: boolean= true;
  isResetBtnDisabled: boolean= true;

  format: string = "simple";

  constructor() { }

  ngOnInit(): void {
  }

  interval(){
    this.timeInterval = setInterval(() => this.chronometre(),1000);
  }

  chronometre(){
    
    this.chrono.secondes += 1;

    if (this.chrono.secondes>=60){
      this.chrono.minutes++;
      this.chrono.secondes=0;
    }
    if (this.chrono.minutes>=60){
      this.chrono.minutes=0;
      this.chrono.secondes=0;
    }
  }

  play(){
    this.isPauseBtnDisabled = false;
    this.isResetBtnDisabled = false;
    this.isPlayBtnDisabled = true;
    this.interval();
  }

  pause(){
    clearInterval(this.timeInterval);
    this.isPauseBtnDisabled = true;
    this.isPlayBtnDisabled = false;
    this.isResetBtnDisabled = false;
  }

  reset(){
    this.chrono.minutes=0;
    this.chrono.secondes=0;
    this.isPlayBtnDisabled = false;
    this.isPauseBtnDisabled = true;
    this.isResetBtnDisabled = true;
  }

  refreshFormat(){
      console.log(this.format);
      
  }

}
