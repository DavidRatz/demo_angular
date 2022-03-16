import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { prixDoubleStock, PRODUIT_INSERT_FORM, sameFirst2Letters } from 'src/app/models/forms/produit.form';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-insert-produit-form',
  templateUrl: './insert-produit-form.component.html',
  styleUrls: ['./insert-produit-form.component.css']
})
export class InsertProduitFormComponent implements OnInit {

  @Output('produit-submitted')
  produitSubmitted = new EventEmitter<Produit>()

  produitInsertForm: FormGroup;
  // new FormGroup({
  //   'marque': new FormControl('', [Validators.required,Validators.minLength(1), Validators.maxLength(30)]),
  //   'modele': new FormControl(undefined, [Validators.minLength(1), Validators.maxLength(30)]),
  //   'prix': new FormControl(0, [Validators.required,Validators.min(0)]),
  //   'stock': new FormControl(1, [Validators.min(1), Validators.max(98)]),
  //   'en_vente': new FormControl(true),
  // },prixDoubleStock);

  constructor(builder: FormBuilder) { 
    // this.produitInsertForm = builder.group({
    //   'marque': ['', [Validators.required,Validators.minLength(1), Validators.maxLength(30)]],
    //   'modele': [undefined, [Validators.minLength(1), Validators.maxLength(30)]],
    //   'prix': [0, [Validators.required,Validators.min(0)]],
    //   'stock':[1, [Validators.min(1), Validators.max(98)]] ,
    //   'en_vente': [true],
    // })
    this.produitInsertForm = builder.group(PRODUIT_INSERT_FORM,{
      validators: [prixDoubleStock,sameFirst2Letters]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.produitInsertForm);
    
    if(this.produitInsertForm.valid){
      if(isNaN(this.produitInsertForm.value.stock))
        this.produitInsertForm.value.stock = 1;
      this.produitSubmitted.emit(this.produitInsertForm.value)
    }
  }

}
