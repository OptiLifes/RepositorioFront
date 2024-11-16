import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  imports: [FormsModule]
})
export class EditProfileComponent {
  user = {
    name: 'Laura Benites Marquez',
    email: 'laura.benites@example.com'
  };

  constructor(private router: Router) {}

  // Método para guardar los cambios y redirigir al perfil
  saveChanges() {
    alert('Perfil actualizado');
    this.router.navigate(['/profile']);
  }

  // Método para regresar al perfil sin guardar cambios
  goBack() {
    this.router.navigate(['/profile']);
  }
}
