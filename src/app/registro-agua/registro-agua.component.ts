import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-agua',
  standalone: true,
  templateUrl: './registro-agua.component.html',
  styleUrls: ['./registro-agua.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class RegistroAguaComponent {
  water = {
    amount: 0
  };
  message: string = '';

  constructor(private router: Router) {}

  saveWater() {
    if (this.water.amount > 0) {
      this.message = 'Se agregó su registro de hidratación.';
      
      // Redirigir a la página principal después de 1 segundo
      setTimeout(() => {
        this.router.navigate(['/principal']);
      }, 1000);
      
    } else {
      this.message = 'Por favor, ingrese una cantidad válida.';
    }
  }
}
