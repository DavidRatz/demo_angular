import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  listPanier!: Produit[];

  constructor(private service: PanierService) { 
    //this.listPanier =  service.listPanier;
    service.getPanierChanged().subscribe(panier => {
      this.listPanier = panier
    });
    
  }

  ngOnInit(): void {
  }

  deleteProduit(produit: Produit)
  {
    let produitPanierIndex = this.listPanier.indexOf(produit);
    if(produitPanierIndex != -1)
      this.listPanier.splice(produitPanierIndex,1);
    this.service.delete2Panier(produit);
  }

  

}
