import { Routes } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { LoginPageComponent } from './authentication/login-page/login-page.component';
import { RegisterPageComponent } from './authentication/register-page/register-page.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { RegistroMetaAlimentacionComponent } from './registro-meta-alimentacion/registro-meta-alimentacion.component';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Importaciones para las nuevas rutas del perfil
import { ProfilePageComponent } from './profile/app/profile/profile-page/profile-page.component';
import { EditProfileComponent } from './profile/app/profile/edit-profile/edit-profile.component';
import { ChangeProfilePictureComponent } from './profile/app/profile/change-profile-picture/change-profile-picture.component';

// Importación para el componente de registro de alimentos
import { RegistroAlimentoComponent } from './registro-alimento/registro-alimento.component';

// Importación para el componente de registro de agua
import { RegistroAguaComponent } from './registro-agua/registro-agua.component';

//Importacion para el componente de registro de sueño
import { RegistroSuenoComponent } from './registro-sueno/registro-sueno.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },  // Ruta principal (landing page)
  { path: 'login', component: LoginPageComponent },  // Ruta para la página de inicio de sesión
  { path: 'register', component: RegisterPageComponent }, // Ruta para el registro
  { path: 'principal', component: PrincipalPageComponent }, // Ruta para la página principal
  { path: 'registro-sueno', component: RegistroSuenoComponent },

  // Rutas para el perfil
  { path: 'profile', component: ProfilePageComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  { path: 'profile/change-picture', component: ChangeProfilePictureComponent },

  // Ruta para el registro de alimentos
  { path: 'registro-alimento', component: RegistroAlimentoComponent },

  // Ruta para el registro de agua
  { path: 'registro-agua', component: RegistroAguaComponent },

  // Redirección por defecto si no se encuentra la ruta
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
// Ruta para el registro de meta alimentacion
  { path: 'registro-meta-alimentacion', component: RegistroMetaAlimentacionComponent },
];

