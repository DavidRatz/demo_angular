import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  
  private _objectif : string = "Salut";

  obsObjectif = new Subject<string>();

  public get objectif() : string {
    return this._objectif;
  }
  public set objectif(objectif : string) {
    this._objectif = objectif;
  }
  
  constructor() { }

  updateObjectif(objectif: string){
    this.objectif = objectif;
    this.obsObjectif.next(this.objectif);
  }
}
