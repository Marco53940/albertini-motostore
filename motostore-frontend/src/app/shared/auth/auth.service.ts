import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private cookies: CookieService) { }

  Url='http://localhost:3000/login-user';

  login(user: any){
    return this.http.post<any>(this.Url, user);
  }

  setUser(userLogged: any){
    this.cookies.set('USERLOGGED',
    userLogged.id);
    this.cookies.set('LOGGED', 'OK');
  }

  getUserLogged() {
    return this.cookies.get('LOGGED');
  }

  logout() {
    this.cookies.set('USERLOGGED',
    null);
    this.cookies.set('LOGGED', null);
  }
}
