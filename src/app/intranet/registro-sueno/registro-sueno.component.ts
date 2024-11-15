import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-sueño',
  standalone: true,
  templateUrl: './registro-sueno.component.html',
  styleUrls: ['./registro-sueno.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class RegistroSuenoComponent {
  // Definir el modelo de datos
  sleepData = {
    sleepTime: '',
    wakeUpTime: '',
    sleepQuality: ''
  };
  message: string = '';

  constructor(private router: Router) {}

  saveSleepData() {
    // Validar que los campos no estén vacíos
    if (!this.sleepData.sleepTime || !this.sleepData.wakeUpTime || !this.sleepData.sleepQuality) {
      this.message = 'Por favor, complete todos los campos.';
      return;
    }

    // Mostrar un mensaje de éxito y redirigir a la página principal
    this.message = 'Se registró su hábito de sueño correctamente.';
    setTimeout(() => {
      this.router.navigate(['/principal']);
    }, 3000);
  }

  // Función para cerrar el formulario y redirigir a la página principal
  closeForm() {
    this.router.navigate(['/principal']);
  }
}
