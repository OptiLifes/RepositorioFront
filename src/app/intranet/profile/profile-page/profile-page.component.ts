import { Component, EventEmitter, Input, Output, } from '@angular/core';
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
  metas = [
    {
      titulo: 'Meta de Alimentación',
      descripcion: 'Mantener una dieta balanceada',
      calorias: 2000,
      proteinas: 100,
      grasas: 50,
      carbohidratos: 250,
    },
  ];
  constructor(private router: Router) {}

// Método para redirigir a la página principal
goBack() {
  this.router.navigate(['/principal']);
}
}
