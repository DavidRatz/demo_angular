import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-produit',
  templateUrl: './form-produit.component.html',
  styleUrls: ['./form-produit.component.css']
})
export class FormProduitComponent implements OnInit {

  form: FormGroup = new FormGroup({
    'produit': new FormControl(),
    'prix': new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
    alert("Produit : " + this.form.value["produit"] + " | prix : " + this.form.value["prix"]);
  }

}
