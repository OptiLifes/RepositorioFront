import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
})
export class ForgotPasswordPageComponent {
  emailForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicialización del formulario reactivo
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.emailForm.valid) {
      console.log('Correo enviado:', this.emailForm.value.email);
      this.message = 'Se envió la solicitud al correo correctamente.';
      setTimeout(() => {
        this.router.navigate(['/principal']);
      }, 3000);
    } else {
      console.log('Formulario inválido');
    }
  }
}
