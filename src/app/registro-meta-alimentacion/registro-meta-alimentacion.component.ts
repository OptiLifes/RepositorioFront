import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-meta-alimentacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-meta-alimentacion.component.html',
  styleUrls: ['./registro-meta-alimentacion.component.scss']
})
export class RegistroMetaAlimentacionComponent {
  metaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Inicialización del formulario reactivo
    this.metaForm = this.fb.group({
      descripcion: ['', Validators.required],
      calorias: ['', [Validators.required, Validators.min(0)]],
      proteinas: [0, [Validators.required, Validators.min(0)]],
      grasas: [0, [Validators.required, Validators.min(0)]],
      carbohidratos: [0, [Validators.required, Validators.min(0)]]
    });
  }

  // Método para redirigir a la página principal
  goBack() {
    this.router.navigate(['/principal']);
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.metaForm.valid) {
      console.log('Formulario enviado:', this.metaForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
