import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-alimento',
  standalone: true,
  templateUrl: './registro-alimento.component.html',
  styleUrls: ['./registro-alimento.component.scss'],
  imports: [FormsModule, CommonModule]
})
export class RegistroAlimentoComponent {
  food = {
    name: '',
    quantity: 0,
    category: ''
  };
  message: string = '';

  constructor(private router: Router){}

  saveFood() {
    if (this.food.name && this.food.quantity > 0 && this.food.category) {
      this.message = 'Alimento registrado con éxito';
      //redirigir a la pagina principal
      setTimeout(()=> {
        this.router.navigate(['/principal']);
      },1000);
      // Aquí puedes manejar la lógica para enviar los datos al backend
    } else {
      this.message = 'Por favor, complete todos los campos correctamente';
    }
  }
  // Método para redirigir a la página principal
  goBack() {
    this.router.navigate(['/principal']);
  }
}
