import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-meta-hidratacion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro-meta-hidratacion.component.html',
  styleUrls: ['./registro-meta-hidratacion.component.scss']
})
export class RegistroMetaHidratacionComponent {
  hydrationForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.hydrationForm = this.fb.group({
      description: ['', Validators.required],
      dailyWaterIntake: ['', [Validators.required, Validators.min(1)]],
      interval: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.hydrationForm.valid) {
      console.log('Hydration goal submitted:', this.hydrationForm.value);
      this.message = 'Meta de hidratación registrada con éxito.';
      setTimeout(() => {
        this.message = ''; // Limpia el mensaje antes de redirigir
        this.router.navigate(['/principal']);
      }, 3000); // 3 segundos para que el usuario vea el mensaje
    } else {
      this.message = 'Por favor, complete todos los campos correctamente.';
      setTimeout(() => {
        this.message = ''; // Limpia el mensaje para evitar confusión
      }, 3000);
    }
  }


  goBack(): void {
    this.router.navigate(['/principal']);
  }
}
