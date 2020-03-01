import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.auth.isAccessTokenInvalido()) {
         return this.auth.obterNovoAccessToken()
              .then(() => {
                if (this.auth.isAccessTokenInvalido()) {
                  this.route.navigate(['/login']);
                  return false;
                }
                return true;
            });

      } else if (next.data.roles && !this.auth.temQualquerPermissao(next.data.roles)) {
        this.route.navigate(['/nao-autorizado']);
        return false;
      }

      return true;
  }

}
