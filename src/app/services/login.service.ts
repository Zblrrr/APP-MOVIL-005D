import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private users: User[] = [
    new User('admin', '123'),
    new User('felipe', '1234')
  ];

  private loggedInUser: string | null = null; // Aqui se guardara si el usuario es autenticado

  constructor() { }

  // Método para validar el login
  validateLogin(u: string, p: string): boolean {
    console.log("Ejecutando validación en el SERVICE!");
    const found = this.users.find(user => user.usuario === u);
    if (found !== undefined) {
      console.log("Usuario existe!");
      if (found.contrasenia === p) {
        this.loggedInUser = u; // Guarda el usuario si el login es exitoso
        return true;
      }
    }
    console.log("Usuario no existe o contraseña incorrecta!");
    return false;
  }

  // Método para obtener el nombre del usuario autenticado
  getUsuario(): string | null {
    return this.loggedInUser;
  }

  // Método para obtener los usuarios
  getUsers(): User[] {
    return this.users;
  }
}
