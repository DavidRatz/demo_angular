import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  number: number = 0;

  ngOnInit(): void {
  }

}
