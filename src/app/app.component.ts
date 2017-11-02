import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works 2!';
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
