import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit {

  nom!: string;
  nomValide?: string;
  nbrTentative = 0;
  nbrValidation = 0;
  min: number = 4;
  max: number = 10;
  regex: string = "^[a-zA-Z]{"+this.min+","+this.max+"}$";

  constructor() { }

  ngOnInit(): void {
  }

  validation(){
    if(this.nom.match(this.regex)){
      this.nomValide = this.nom;
      this.nbrValidation++;
    }
    this.nbrTentative++;
    this.nom = "";
  }


}
