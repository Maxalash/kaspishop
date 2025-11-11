import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) {
  console.log(`Login application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
}
}
