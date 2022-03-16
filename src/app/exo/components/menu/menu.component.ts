import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listeProduits: Produit[] = [
    {
      marque: "marque1",
      modele: "modele1",
      prix: 40,
      stock: 20,
      en_vente: true,
    },
    {
      marque: "marque2",
      modele: "modele2",
      prix: 30,
      stock: 40,
      en_vente: true,
    },
    {
      marque: "marque3",
      modele: "modele3",
      prix: 20,
      stock: 60,
      en_vente: false,
    },
  ];

  constructor(private service: PanierService) { }

  ngOnInit(): void {
  }

  addProduit(produit: Produit){
    this.service.add2Panier(produit);
  }

}
