import { Routes } from '@angular/router';

import { LoginComponent, SignupComponent,
ForgotPasswordComponent,
ResetPasswordComponent} from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiceworkerComponent } from './serviceworker/serviceworker.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SideBar2Component },
  {path: 'signup',component: SignupComponent},
  {path: 'forgot',component: ForgotPasswordComponent},
  {path: 'reset',component: ResetPasswordComponent},
];
