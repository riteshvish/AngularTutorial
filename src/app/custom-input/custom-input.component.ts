// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-custom-input',
//   templateUrl: './custom-input.component.html',
//   styleUrls: ['./custom-input.component.css']
// })
// export class CustomInputComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-input',
  template:`
    <div class="custom-input">
      {{ label }}
      <input type="text" />
    </div>
  `,
  providers: []
})
export class CustomInputComponent {

  @Input()
  label: string;

}

@Component({
  selector: 'custom-range',
  template:`
    <div class="custom-range">
      {{ label }}
      <input type="range" />
    </div>
  `,
})
export class CustomRange {

  @Input()
  label: string;

}
