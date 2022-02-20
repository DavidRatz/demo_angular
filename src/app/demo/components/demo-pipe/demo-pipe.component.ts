import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/models/voiture.model';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  date =  new Date();
  voiture: Voiture = {
    marque: "Bibam",
    modele: "Vroom",
    nbrPorte: 3,
    puissance: 80
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
