import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  listProduit : Produit[]  = [
    {
      marque: "marque1",
      modele: "modele1",
      prix: 1,
      stock: 1,
      en_vente: true,
    },
    {
      marque: "marque2",
      modele: "modele2",
      prix: 2,
      stock: 2,
      en_vente: true,
    },
    {
      marque: "marque3",
      modele: "modele3",
      prix: 3,
      stock: 3,
      en_vente: true,
    },
  ]

  constructor(private service: ConnexionService) { }

  isConnected(){
    return this.service.isConnected;
  }

  ngOnInit(): void {
  }

  onSubmitted(toInsert: Produit){
    this.listProduit.push(toInsert);
  }

}
