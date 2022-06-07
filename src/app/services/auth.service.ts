import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IToken} from "../interfaces/token.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access';

  constructor(private httpClient: HttpClient) { }

  _register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  _login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  _setToken(token: IToken): void {
    localStorage.setItem(this.accessTokenKey, token.access);
  }

  _getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  _isAuthorized(): boolean {
    return !!localStorage.getItem(this.accessTokenKey)
  }

}
