import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient = inject(HttpClient);

  private _token: string | null = null;

  constructor() {}

  login(email: string, password: string): void {
    this.httpClient.post('/api/login', { email, password }).subscribe(response => {
      console.log('Login successful', response);
      this._token = 'dummy-token';
    });
  }

  logout(): void {
    this.httpClient.get('/api/logout').subscribe(response => {
      console.log('Logout successful', response);
      this._token = 'dummy-token';
    });
  }

  get token(): string | null {
    return this._token;
  }

}
