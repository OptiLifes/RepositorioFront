import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  isOpen: boolean = true;

  // Lista de metas
  metas = [
    { id: 1, descripcion: 'Reducir 20 kg' },
    { id: 2, descripcion: 'Hacer ejercicio 5 veces por semana' },
    { id: 3, descripcion: 'Comer saludable' }
  ];

  constructor(private router: Router) { }

  // Método para redirigir a la página principal
  goBack(): void {
    this.router.navigate(['/principal']);
  }

  // Método para eliminar una meta
  eliminarMeta(id: number): void {
    this.metas = this.metas.filter(meta => meta.id !== id);
  }
}
