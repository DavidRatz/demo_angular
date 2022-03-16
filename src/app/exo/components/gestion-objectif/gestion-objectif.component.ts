import { Component, OnInit } from '@angular/core';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-gestion-objectif',
  templateUrl: './gestion-objectif.component.html',
  styleUrls: ['./gestion-objectif.component.css']
})
export class GestionObjectifComponent implements OnInit {

  objectif: string = '';

  constructor(private service: ObjectifService) {
    
   }

  ngOnInit(): void {
  }

  updateObjectif(){    
    this.service.updateObjectif(this.objectif);
    
  }

}
