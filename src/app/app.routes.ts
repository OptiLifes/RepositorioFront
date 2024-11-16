import { Routes } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterPageComponent } from './authentication/register-page/register-page.component';
import { PrincipalPageComponent } from './layouts/principal-page/principal-page.component';
import { RegistroMetaAlimentacionComponent } from './intranet/registro-meta-alimentacion/registro-meta-alimentacion.component';
import { RegistroAlimentoComponent } from './intranet/registro-alimento/registro-alimento.component';
import { RegistroAguaComponent } from './intranet/registro-agua/registro-agua.component';
import { RegistroSuenoComponent } from './intranet/registro-sueno/registro-sueno.component';
import { ProfilePageComponent } from './intranet/profile/profile-page/profile-page.component';
import { EditProfileComponent } from './intranet/profile/edit-profile/edit-profile.component';
import { ChangeProfilePictureComponent } from './intranet/profile/change-profile-picture/change-profile-picture.component';

export function authGuard(): boolean {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated === 'true';
}

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },

  // Rutas protegidas
  { path: 'principal', component: PrincipalPageComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard] },
  { path: 'profile/edit', component: EditProfileComponent, canActivate: [authGuard] },
  { path: 'profile/change-picture', component: ChangeProfilePictureComponent, canActivate: [authGuard] },
  { path: 'registro-alimento', component: RegistroAlimentoComponent, canActivate: [authGuard] },
  { path: 'registro-agua', component: RegistroAguaComponent, canActivate: [authGuard] },
  { path: 'registro-sueno', component: RegistroSuenoComponent, canActivate: [authGuard] },
  { path: 'registro-meta-alimentacion', component: RegistroMetaAlimentacionComponent, canActivate: [authGuard] },

  // Redirección por defecto
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
