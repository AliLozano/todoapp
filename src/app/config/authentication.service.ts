import { Injectable } from '@angular/core';
import {User} from "../services/users-api.service";

const LOCALSTORAGE_KEY = "userupao"

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user: User | undefined;

  constructor() {
    const value = localStorage.getItem(LOCALSTORAGE_KEY)
    if(value) {
      this.user = JSON.parse(value);
    }
  }

  getUser() {
    return this.user
  }

  isAuthenticated() {
    return this.user !== undefined
  }

  authenticate(user: User) {
    this.user = user;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }

}
