import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from "firebase/compat/app";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 constructor(public auth: AngularFireAuth){

  this.auth.authState.subscribe(user => {
    console.log(user)
  })
  }
 
  loginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error during login:', error);
      });
  }

  logout() {
    this.auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  }
  
    getCurrentUser(): Observable<firebase.User | null> {
      return this.auth.authState;
    }


}
