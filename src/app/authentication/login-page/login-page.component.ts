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

  login() {
    const isAuthenticated = true; // Aquí debes agregar tu lógica real para autenticar al usuario
    if (isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true'); // Almacena el estado de autenticación
      this.router.navigate(['/principal']); // Redirige al usuario a la página principal
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
