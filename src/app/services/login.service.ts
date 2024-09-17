import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [
    new User('admin', '123'),
    new User('felipe', '1234')
  ]

  constructor() { }

  validateLogin(u: string, p: string): boolean {
    console.log("Ejecutando validacion SERVICE!")
    const found = this.users.find(user => user.usuario === u)
    if (found !== undefined) {
      console.log("Usuario existe!")
      return found.contrasenia === p;
    }
    console.log("Usuario no existe!")
    return false;
  }


}
