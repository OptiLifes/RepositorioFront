import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Ruta principal (landing page)
  { path: 'login', component: LoginPageComponent },  // Ruta para la página de inicio de sesión
  { path: 'register', component: RegisterPageComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];
