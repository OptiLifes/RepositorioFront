import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.scss'
})
export class PrincipalPageComponent {
  isFoodEntryModalOpen= false;
  openFoodEntryModal(){
    this.isFoodEntryModalOpen = true;
  }
  closeFoodEntryModal(){
    this.isFoodEntryModalOpen= false;
  }
  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}