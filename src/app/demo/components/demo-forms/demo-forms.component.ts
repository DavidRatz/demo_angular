import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.css']
})
export class DemoFormsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    'nom': new FormControl(),
    'age': new FormControl()
  });
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form);
    
  }

}
