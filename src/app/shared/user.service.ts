import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  surname: string;
  age: number | string;
  email: string;
  password: string | number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User;
  public isLogged = false;
  public userSubject$ = new BehaviorSubject<User>(this.user);
  public userIslogged$ = new BehaviorSubject<boolean>(this.isLogged);
  public isTrueData = false;
  public isTrueDataSubject$ = new BehaviorSubject<boolean>(this.isTrueData);

  signup(user: User): void {
    this.user = user;
    this.userSubject$.next(this.user);
    this.isLogged = true;
    this.userIslogged$.next(this.isLogged);
    this.isTrueData = true;
    this.isTrueDataSubject$.next(this.isTrueData);
  }

  checkData(isTrue: boolean) {
    this.isTrueData = isTrue;
    this.isTrueDataSubject$.next(this.isTrueData);
  }

  loginfn(): void {
    if (this.user) {
      this.isLogged = !this.isLogged;
      this.userIslogged$.next(this.isLogged);
    } else {
      this.isLogged = false;
      this.userIslogged$.next(this.isLogged);
    }
  }

  constructor() {}
}
