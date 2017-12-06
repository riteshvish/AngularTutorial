import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PushNotificationsModule } from 'angular2-notifications';
import { AppComponent } from './app.component';

import { ChatService } from './chat.service';





import { LoginComponent, SignupComponent,
ForgotPasswordComponent,
ResetPasswordComponent} from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations/index';
// import { NoopAnimationsModule } from '@angular/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification/notification.component';
import { TextareaExpandedComponent } from './textarea-expanded/textarea-expanded.component';
import { CustomInputComponent,CustomRange } from './custom-input/custom-input.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceworkerComponent } from './serviceworker/serviceworker.component';
import { SideBar2Component } from './side-bar2/side-bar2.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NotificationComponent,
    TextareaExpandedComponent,
    CustomInputComponent,
    CustomRange,
    SidebarComponent,
    MenuComponent,
    ServiceworkerComponent,
    SideBar2Component,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    PushNotificationsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes)

  ],
  providers: [ChatService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
