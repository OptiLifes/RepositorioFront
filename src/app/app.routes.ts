import { Routes } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterPageComponent } from './authentication/register-page/register-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Ruta principal (landing page)
  { path: 'login', component: LoginPageComponent },  // Ruta para la página de inicio de sesión
  { path: 'register', component: RegisterPageComponent },
  { path: 'principal', component: PrincipalPageComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

