import { Injectable, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authService = inject(AuthService);

  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) {
  console.log(`Login application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
    this.authService.login(email, 'dummy-password');
}
}
