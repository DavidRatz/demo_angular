import { Component, OnInit } from '@angular/core';
import { ColorswapService } from 'src/app/services/colorswap.service';

@Component({
  selector: 'app-colorchange',
  templateUrl: './colorchange.component.html',
  styleUrls: ['./colorchange.component.css']
})
export class ColorchangeComponent implements OnInit {

  color: string = 'blue'
  constructor(private service: ColorswapService) { }

  ngOnInit(): void {
  }

  onColorChange(){
    //this.color = (this.color == 'blue' ? 'red' : 'blue');
    console.log(this.color);
    
    this.service.onColorSwap(this.color);
  }

}
