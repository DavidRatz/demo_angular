import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from 'src/app/services/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuard implements CanActivate {

  
  constructor(private service: ConnexionService,private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const connected = this.service.isConnected;
      if(!connected){
        this.router.navigateByUrl('accueil');
      }
      return connected;
  }
  
}
