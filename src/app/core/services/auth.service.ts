import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: string;;

  constructor() { }

  login(): void {
    this.token = 'fake-token';
  }

  getToken(): string {
    return this.token;
  }
}
