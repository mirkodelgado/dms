import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,
    private alertify: AlertifyService) {}

  canActivate(route, state: RouterStateSnapshot): boolean {
    if (this.authService.loggedIn()) {

      if (state.url === '/') {
        this.router.navigate(['/home']);
      }

      return true;
    }

    // console.log('state.url: ' + state.url);

    if (state.url === '/') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    }

    return false;
  }
}
