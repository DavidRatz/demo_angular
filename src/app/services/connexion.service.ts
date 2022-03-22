import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  public get isConnected() {
    //return localStorage.getItem('user') ? true : false;
    return sessionStorage.getItem('user') ? true : false;
  }

  constructor() { }

  getConnected(){
    const json_user = sessionStorage.getItem('user');
    return json_user ? JSON.parse(json_user)['username'] : null;
  }

  public connect(credentials: User): boolean{
    if(credentials.username === "user" && credentials.password === "pass"){
      //localStorage.setItem('user', JSON.stringify({username:'user'}))
      sessionStorage.setItem('user', JSON.stringify({username:'user'}))
      return true;
    }
    else
      return false;
  }

  public disconnect(): boolean{
    if(this.isConnected){
      //localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      return true;
    }
    else
      return false;
  }
}
