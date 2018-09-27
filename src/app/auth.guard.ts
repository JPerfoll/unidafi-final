import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authenticated : any;
  constructor(private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {       
        if (!this.authenticated) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
  }
}
