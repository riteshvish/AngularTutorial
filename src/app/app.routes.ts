import { Routes } from '@angular/router';

import { LoginComponent, SignupComponent,
ForgotPasswordComponent,
ResetPasswordComponent} from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: NotificationComponent },
  {path: 'signup',component: SignupComponent},
  {path: 'forgot',component: ForgotPasswordComponent},
  {path: 'reset',component: ResetPasswordComponent},
];
