import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plat } from 'src/app/models/plat.model';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.css']
})
export class ListePlatComponent implements OnInit {

  listPlat!: Plat[];
  platForm = new FormGroup({
    'id': new FormControl(),
    'nom': new FormControl(),
    'type': new FormControl(),
    'prix': new FormControl()
  })

  constructor(private service: PlatService, private router: Router) {
    this.getPlats();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let nomPlat: Plat = {
    id : this.platForm.value.id,
    nom : this.platForm.value.nom,
    type : this.platForm.value.type,
    prix : this.platForm.value.prix
    };
    this.service.postPlat(nomPlat).subscribe(() => this.getPlats());
  }

  getPlats(){
    this.service.getPlats().subscribe({
      next: plats => this.listPlat = plats,
      error: err => alert("echec")
    });
  }

  onDetails(plat : Plat){
    this.router.navigate(['demo','plat',plat.id])
  }

}
