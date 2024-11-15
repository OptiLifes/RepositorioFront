import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  imports: [FormsModule] // Asegúrate de importar FormsModule aquí
})
export class EditProfileComponent {
  user = {
    name: 'Laura Benites Marquez',
    email: 'laura.benites@example.com'
  };

  constructor(private router: Router) {}

  saveChanges() {
    alert('Perfil actualizado');
    // Aquí rediriges al perfil después de guardar
    this.router.navigate(['/profile']);
  }
}
