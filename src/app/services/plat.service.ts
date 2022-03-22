import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Plat } from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private readonly BASE_URL = "http://localhost:3000/plats";
  
  private _listError : string[];
  public get listError() : string[] {
    return this._listError;
  }
  

  constructor(private client: HttpClient) { 
    this._listError = [];
  }

  getPlats(){
    return this.client.get<Plat[]>(this.BASE_URL);
  }

  getPlat(id: number): Observable<Plat>{
    return this.client.get<Plat>(this.BASE_URL+"/" + id).pipe(
      catchError((err, caught) => {
        this._listError.push(err.message);
        return caught;
        })
    )
  }

  postPlat(nomPlat: Plat){
    return this.client.post<Plat>(this.BASE_URL,nomPlat);
  }


}
