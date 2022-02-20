import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  color: string = "black";
  bgColor: string = "blue";

  numberInput: number = 0;  

  displayed: boolean = false;

  cptChild: number = 0;

  tabFruit = [
    "pomme",
    "banane",
    "cerise"
  ]

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  toggleDisplay(){
    this.displayed = !this.displayed;
  }

  onColorSwapped(color: string){
    //console.log(color);
    
  }

  getNumberChild(){
    this.cptChild++;
    this.cdref.detectChanges();
  }
}
