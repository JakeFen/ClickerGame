import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private auth: Auth, private router: Router) {}

  currentUser$ = authState(this.auth);

  login(username: string, password: string) {
    return signInWithEmailAndPassword(this.auth, username, password)
      .then(() => {
        console.log('Auth Service: loginUser: success');
        this.router.navigate(['/game']);
      })
      .catch((error) => {
        console.log('Auth Service: login error...');
        console.log('error code', error.code);
        console.log('error', error);
        if (error.code) {
          return {
            isValid: false,
            message: error.message,
          };
        }
        return error;
      });
  }

  logout() {
    return this.auth
      .signOut()
      .then(() => {
        this.router.navigate(['']);
      })
      .catch((error) => {
        console.log('Auth Service: reset password error...');
        console.log(error.code);
        console.log(error);
        if (error.code) {
          return error;
        }
      });
  }
}
