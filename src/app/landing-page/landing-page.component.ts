import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import {FooterComponent} from "../footer/footer.component";

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, RouterModule, FooterComponent],  // Añadir RouterModule a los imports
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {}
