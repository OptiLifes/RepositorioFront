import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reporte-de-progreso',
  standalone: true,
  imports: [],
  templateUrl: './reporte-de-progreso.component.html',
  styleUrl: './reporte-de-progreso.component.scss'
})
export class ReporteDeProgresoComponent {

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/principal']);
  }
}
