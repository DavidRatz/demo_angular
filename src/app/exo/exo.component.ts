import { Component, OnInit } from '@angular/core';
import { ColorswapService } from '../services/colorswap.service';
import { ObjectifService } from '../services/objectif.service';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.css']
})
export class ExoComponent implements OnInit {

  objectif?: string;
  color?: string;

  listColor?: Array<string>;

  constructor(private service: ObjectifService, private colorSwapService: ColorswapService) { 
    this.objectif = service.objectif;   
    service.obsObjectif.subscribe(info => this.objectif = info);
    colorSwapService.obsColor.subscribe(color => this.color = color);

    colorSwapService.obsHistoColor.subscribe(listColor => this.listColor = listColor);

  }

  ngOnInit(): void {
  }

  // getObjectifActuel(){
  //   return this.service.objectif;
  // }



}
