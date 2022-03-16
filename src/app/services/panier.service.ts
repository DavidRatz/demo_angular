import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  

  
  private _listPanier : Produit[] = [];
  public get listPanier() : Produit[] {
    return this._listPanier.slice();
  }

  private obsListPanier = new BehaviorSubject<Array<Produit>>(this._listPanier.slice());

  constructor() { }

  add2Panier(produit: Produit) {
    let obs: Observable<string> = of('ok');
    
    const item = this._listPanier.find(p => p.marque == produit.marque && p.modele == produit.modele);
    if(item)
      produit.quantite!++;
    else{
      produit.quantite = 1;
      this._listPanier.push(produit);
    }
    this.obsListPanier.next(this.listPanier);
  }

  delete2Panier(produit: Produit){
    const item = this._listPanier.find(p => p.marque == produit.marque && p.modele == produit.modele);
    let indexProduit = this._listPanier.indexOf(produit);
    if(item && produit.quantite! > 1){
      produit.quantite!--;
    }
    else {
      if(indexProduit != -1)
        this._listPanier.splice(indexProduit,1);
      else
        alert("Aucun produit trouvé");
    }
    this.obsListPanier.next(this.listPanier);
  }

  getPanierChanged() : Observable<Produit[]>{
    return this.obsListPanier;
  }
}
