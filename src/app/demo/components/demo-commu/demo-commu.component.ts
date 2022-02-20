import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-commu',
  templateUrl: './demo-commu.component.html',
  styleUrls: ['./demo-commu.component.css']
})
export class DemoCommuComponent implements OnInit {

  info: string = "info";
  colorParent: string = "black";

  constructor() { }

  ngOnInit(): void {
  }

  onColorChange(color: string){
    this.colorParent = color;
  }


}
