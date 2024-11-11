import { Routes } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterPageComponent } from './authentication/register-page/register-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';

// Importaciones para las nuevas rutas del perfil
import { ProfilePageComponent } from './profile/app/profile/profile-page/profile-page.component';
import { EditProfileComponent } from './profile/app/profile/edit-profile/edit-profile.component';
import { ChangeProfilePictureComponent } from './profile/app/profile/change-profile-picture/change-profile-picture.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Ruta principal (landing page)
  { path: 'login', component: LoginPageComponent },  // Ruta para la página de inicio de sesión
  { path: 'register', component: RegisterPageComponent }, // Ruta para el registro
  { path: 'principal', component: PrincipalPageComponent }, // Ruta para la página principal

  // Rutas para el perfil
  { path: 'profile', component: ProfilePageComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  { path: 'profile/change-picture', component: ChangeProfilePictureComponent },

  // Redirección por defecto si no se encuentra la ruta
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];