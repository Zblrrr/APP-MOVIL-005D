import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = [

  ]

  constructor() { }

  validateLogin(usuario: string, contrasenia: string): boolean {
    console.log("Ejecutando validacion SERVICE!")
    const found = this.users.find(user => user.usuario === usuario)
    if (found !== undefined) {
      console.log("Usuario existe!")
      return found.contrasenia === contrasenia;
    }
    console.log("Usuario no existe!")
    return false;
  }


}
