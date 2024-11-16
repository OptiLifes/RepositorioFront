import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-profile-picture',
  standalone: true,
  templateUrl: './change-profile-picture.component.html',
  styleUrls: ['./change-profile-picture.component.scss']
})
export class ChangeProfilePictureComponent {
  selectedFile: File | null = null;

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPicture() {
    if (this.selectedFile) {
      alert('Foto de perfil actualizada');
      this.router.navigate(['/profile']);
    } else {
      alert('Por favor, selecciona una foto.');
    }
  }

  goBack() {
    this.router.navigate(['/profile']);
  }
}
