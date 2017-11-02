import { Routes } from '@angular/router';

import { LoginComponent, SignupComponent,
ForgotPasswordComponent,
ResetPasswordComponent} from './login/login.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'signup',component: SignupComponent},
  {path: 'forgot',component: ForgotPasswordComponent},
  {path: 'reset',component: ResetPasswordComponent},
];
