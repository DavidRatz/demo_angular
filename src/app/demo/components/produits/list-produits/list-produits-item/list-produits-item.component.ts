import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-list-produits-item',
  templateUrl: './list-produits-item.component.html',
  styleUrls: ['./list-produits-item.component.css']
})
export class ListProduitsItemComponent implements OnInit {

  @Input()
  produit!: Produit;

  constructor() { }

  ngOnInit(): void {
  }

}
