import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
  imports: [RouterModule]
})
export class PrincipalPageComponent {
  constructor(private router: Router) {
    this.checkAuthentication();
  }

  checkAuthentication() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      // Si no está autenticado, redirige al inicio de sesión
      this.router.navigate(['/']);
    }
  }

  logout() {
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/']);
  }


}
