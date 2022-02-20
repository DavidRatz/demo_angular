import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-parent',
  templateUrl: './exo-parent.component.html',
  styleUrls: ['./exo-parent.component.css']
})
export class ExoParentComponent implements OnInit {

  colorEnfant1: boolean = false;
  //colorEnfant2: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    // if(this.colorEnfant1 == color)
    //   this.colorEnfant2 = color;
    // else
    //   this.colorEnfant1 = color;
    this.colorEnfant1 = !this.colorEnfant1;
  }

}
