import { Injectable } from '@angular/core';
import { Auth, UserCredential, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserInfo, } from '@angular/fire/auth';
import { Observable, from, of,concatMap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser$ = authState(this.auth);

  constructor(private auth:Auth) { }

  login(username: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password));//.pipe
  //switchMap(({ user })=> updateProfile(user,{ displayName: name }));
  }

  logout() {
    return from(this.auth.signOut());
  }
}
