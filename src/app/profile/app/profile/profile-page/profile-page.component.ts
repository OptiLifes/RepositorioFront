import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  user = {
    name: 'Laura Benites Marquez',
    email: 'laura.benites@example.com',
    profilePicture: 'assets/img/user.png'
  };

  constructor(private router: Router) {}

  goToEditProfile() {
    this.router.navigate(['/profile/edit']);
  }

  goToChangeProfilePicture() {
    this.router.navigate(['/profile/change-picture']);
  }
}
