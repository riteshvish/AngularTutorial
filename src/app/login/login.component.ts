import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../router.animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.2.css','./login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-signup',
  templateUrl: './signup/signup.component.html',
  styleUrls: ['./login.component.2.css','./login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword/forgotpassword.component.html',
  styleUrls: ['./login.component.2.css','./login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword/resetpassword.component.html',
  styleUrls: ['./login.component.2.css','./login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
})
export class ResetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
