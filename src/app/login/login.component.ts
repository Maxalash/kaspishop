import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginService: LoginService = inject(LoginService);
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor() {
    
  }
  submitApplication() {
  this.loginService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  );

}

}
