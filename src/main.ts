import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';  // Asegúrate de estar usando AppComponent
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {  // Usa AppComponent aquí
  providers: [
    provideRouter(routes),  // Proveer las rutas correctamente
    provideAnimations(),  // Proveer las animaciones
  ],
}).catch(err => console.error(err));
