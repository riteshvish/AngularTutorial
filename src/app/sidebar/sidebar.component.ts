import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
   trigger('slideInOut', [
     state('in', style({
       transform: 'translate3d(70%, 0, 0)'
     })),
     state('out', style({
       transform: 'translate3d(100%, 0, 0)'
     })),
     state('full', style({
       transform: 'translate3d(0%, 0, 0)'
     })),
     transition('in => out', animate('400ms ease-in-out')),
     transition('out => in', animate('400ms ease-in-out')),
     transition('in => full', animate('400ms ease-in-out')),
     transition('full => in', animate('400ms ease-in-out'))
   ]),
   trigger('pusherInOut', [
     state('out', style({
       transform: 'translate3d(0, 0, 0)'
     })),
     state('in', style({
       transform: 'translate3d(-30%, 0, 0)'
     })),
     state('full', style({
       transform: 'translate3d(-100%, 0, 0)'
     })),
     transition('in => out', animate('400ms ease-in-out')),
     transition('out => in', animate('400ms ease-in-out')),
     transition('in => full', animate('400ms ease-in-out')),
     transition('full => in', animate('400ms ease-in-out'))
   ]),
   trigger('fadeInOut', [
     state('in', style({
       opacity:0.5,
       background:'#fcfcfc'
     })),
     state('out', style({
       opacity:0,
       display:'none',
       background:'#ccc'
     })),
     state('full', style({
       opacity:0,
       display:'none',
       background:'#ccc'
     })),
     transition('in => out', animate('400ms ease-in-out')),
     transition('out => in', animate('400ms ease-in-out')),
     transition('in => full', animate('400ms ease-in-out')),
     transition('full => in', animate('400ms ease-in-out'))
   ]),
 ]
})
export class SidebarComponent implements OnInit {
  title = 'app works!';

  menuState:string = 'out';

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  toggleFullMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'in' ? 'full' : 'in';
  }
  constructor() { }

  ngOnInit() {
  }

}
