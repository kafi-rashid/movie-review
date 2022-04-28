import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkLogin(credentials: any) {
    let username = credentials.username;
    let password = credentials.password;
    if(username && username.toLowerCase() === 'mahabub' && password === '1234') return true
    return false
  }
}
