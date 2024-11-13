import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-meta-alimentacion',
  standalone: true,  // Indica que este es un componente independiente
  imports: [CommonModule, ReactiveFormsModule], // Importa ReactiveFormsModule aquí
  templateUrl: './registro-meta-alimentacion.component.html',
  styleUrls: ['./registro-meta-alimentacion.component.scss']
})
export class RegistroMetaAlimentacionComponent {
  metaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario reactivo
    this.metaForm = this.fb.group({
      descripcion: ['', Validators.required],
      calorias: ['', [Validators.required, Validators.min(0)]],
      proteinas: ['', [Validators.required, Validators.min(0)]],
      grasas: ['', [Validators.required, Validators.min(0)]],
      carbohidratos: ['', [Validators.required, Validators.min(0)]]
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.metaForm.valid) {
      console.log('Formulario enviado:', this.metaForm.value);
      // Puedes añadir lógica aquí para enviar los datos al backend, si es necesario
    } else {
      console.log('Formulario inválido');
    }
  }
}
