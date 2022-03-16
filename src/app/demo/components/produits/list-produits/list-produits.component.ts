import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  @Input('produits')
  listProduit!: Produit[];

  constructor() { }

  ngOnInit(): void {
  }

}
