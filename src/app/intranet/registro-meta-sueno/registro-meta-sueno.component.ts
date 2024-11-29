import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-meta-sueno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-meta-sueno.component.html',
  styleUrls: ['./registro-meta-sueno.component.scss']
})
export class RegistroMetaSuenoComponent {
  sleepGoalForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    // Iniciamos el formulario con validaciones
    this.sleepGoalForm = this.fb.group({
      sleepHours: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.sleepGoalForm.valid) {
      // Mostrar mensaje de éxito
      this.message = 'Meta de sueño registrada con éxito.';

      // Redirigir después de 3 segundos
      setTimeout(() => {
        this.router.navigate(['/principal']);
      }, 3000);
    } else {
      // Mostrar mensaje de error si el formulario no es válido
      this.message = 'Por favor, ingrese un valor válido de horas de sueño.';
    }
  }
  // Función para cerrar el formulario y redirigir a la página principal
  closeForm() {
    this.router.navigate(['/principal']);
  }
  // Método para redirigir a la página principal
  goBack() {
    this.router.navigate(['/principal']);
  }
}
