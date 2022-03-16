import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.css']
})
export class DemoFormsComponent implements OnInit {

  form: FormGroup = new FormGroup({
    'nom': new FormControl(undefined, Validators.required),
    'age': new FormControl(undefined, [Validators.min(0), Validators.max(100)]),
    'bouffe-pref': new FormControl("gateau")
  });
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid)
      console.log(this.form);
    else
      console.log("form invalid");
      
  }

}
