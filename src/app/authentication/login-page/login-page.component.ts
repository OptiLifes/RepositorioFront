import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [RouterModule]
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  // Método para manejar el inicio de sesión
  login() {
    // Aquí puedes poner tu lógica para validar el usuario y contraseña
    const isAuthenticated = true; // Simulación del inicio de sesión exitoso

    if (isAuthenticated) {
      // Redirigir al usuario a la página principal
      this.router.navigate(['/principal']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}