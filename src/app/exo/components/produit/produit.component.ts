import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  tabProduit: Produit[] = [
    {
      marque: "marque 1",
      modele: "modele 1",
      stock: 0,
      prix: 20,
      en_vente: true
    },
    {
      marque: "marque 2",
      modele: "modele 2",
      stock: 2,
      prix: 10,
      en_vente: false
    },
    {
      marque: "marque 3",
      modele: "modele 3",
      stock: 10,
      prix: 50,
      en_vente: false
    }
  ]

  hide: boolean = false;
  tri: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  toggleEnVente(index: number){
    this.tabProduit[index].en_vente = !this.tabProduit[index].en_vente;
  }

  supprimerProduit(index: number){
    this.tabProduit.splice(index,1);
  }

  toggleHide(){
    this.hide = !this.hide;
  }

  triProduit(){
    switch (this.tri) {
      case "prix":
        return this.tabProduit.sort((a: Produit, b: Produit) => {
          return a.prix - b.prix;
        });
        break;
      case "stock":
        return this.tabProduit.sort((a: Produit, b: Produit) => {
         // return a.stock < b.stock ? -1 : 1;
          return a.stock - b.stock; 
        });
        break;
      case "marque":
        return this.tabProduit.sort((a: Produit, b: Produit) => {
          return a.marque.localeCompare(b.marque);
        });
        break;
    
      default:
        return this.tabProduit.sort();
        break;
    }
    
  }

}
