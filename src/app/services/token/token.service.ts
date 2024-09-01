import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  // metodo setter
  setToken(token : string) {
    localStorage.setItem('token', token);
  }

  getToken(){
    return localStorage.getItem('token') as string;
  }

}
