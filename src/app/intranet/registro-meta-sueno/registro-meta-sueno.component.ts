import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-meta-sueno',
  templateUrl: './registro-meta-sueno.component.html',
  styleUrls: ['./registro-meta-sueno.component.scss']
})
export class RegistroMetaSuenoComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  sleepGoal = {
    hours: null // Asegúrate de que la propiedad hours esté inicializada
  };
  message: string = '';
metaForm: any;

  constructor(private router: Router) {}

  // Método para navegar a la página principal o cualquier ruta que desees
  goBack() {
    this.router.navigate(['/principal']);  // Aquí puedes poner la ruta a la que quieres que el usuario regrese
  }

  // Función para guardar la meta de sueño
  saveSleepGoal(form: NgForm) {
    if (form.valid) {
      this.message = 'Meta de sueño registrada con éxito.';
    } else {
      this.message = 'Por favor, ingresa un valor válido para las horas de sueño.';
    }
  }
}

