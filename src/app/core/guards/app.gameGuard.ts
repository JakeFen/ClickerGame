import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameGuard implements CanActivate {
  constructor(private auth: Auth, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          console.log('Auth Guard: user is not logged in');
          this.router.navigate(['']);
          resolve(false);
        }
      });
    });
  }
}
