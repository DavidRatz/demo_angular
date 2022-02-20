import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../../models/voiture.model';

@Pipe({
  name: 'voitureFormat'
})
export class VoitureFormatPipe implements PipeTransform {

  transform(voiture: Voiture, include_details: boolean = true): string {
    return "marque : " + voiture.marque + " | modele : " + voiture.modele + 
      (include_details ? " | nombre de porte : " + voiture.nbrPorte + " | puissance : " + voiture.puissance + " ch" : "");
  }

}
