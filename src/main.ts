import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proveer las rutas correctamente
    provideAnimations(), // Proveer animaciones
    provideRouter(routes), 
    provideAnimations(), FormsModule
  ]
}).catch(err => console.error(err));
