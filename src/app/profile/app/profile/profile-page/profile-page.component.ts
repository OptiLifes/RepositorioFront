import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
router: any;
// Método para redirigir a la página principal
goBack() {
  this.router.navigate(['/principal']);
}
}