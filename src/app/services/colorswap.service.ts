import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorswapService {

  
  private _color : string = '';
  public get color() : string {
    return this._color;
  }
  public set color(v : string) {
    this._color = v;
  }

  
  private _histoColor : Array<string> = [];
  public get histoColor() : Array<string> {
    return this._histoColor;
  }
  

  obsColor = new Subject<string>();
  obsHistoColor = new Subject<Array<string>>();
  
  
  constructor() { }

  onColorSwap(color: string){
    this.color = color;
    this.obsColor.next(this.color);
    
    this.histoColor.push(this.color);
    this.obsHistoColor.next(this.histoColor);
  }
}
