import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import {appendQuery}  from 'append-query'
import {ActivatedRoute} from "@angular/router";
// import { RouteParams } from '@angular/router';
// import {Router, ROUTER_DIRECTIVES, RouteParams} from '@angular/router';
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
  insertParam(key, value)
  {
      key = encodeURI(key); value = encodeURI(value);
    console.log(key)
    console.log(value)
      var kvp = document.location.search.substr(1).split('&');
      console.log(kvp)
      console.log(document.location.search)

      var i=kvp.length; var x; while(i--)
      {
          x = kvp[i].split('=');

          if (x[0]==key)
          {
              x[1] = value;
              kvp[i] = x.join('=');
              break;
          }
      }

      if(i<0) {kvp[kvp.length] = [key,value].join('=');}

      //this will reload the page, it's likely better to store this until finished
      // document.location.search = 'http://localhost:4200/#/login?name=ritesh'

  }
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    // appendQuery('http://localhost:4200/#/login', 'bar=baz&beep=boop')
    // this.insertParam("name","rietsj")
  }
  toggleFullMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'in' ? 'full' : 'in';

  }

  // constructor(private _routeParams: RouteParams) {
  //    var queryParam = this._routeParams.get('menu');
  // }
  // constructor(){}
  constructor(private route: ActivatedRoute) {
      // let self=this;
      // this.route.params.subscribe( params => {console.log(params)
      //   this.menuState=params.menu;
      // }
      this.route.queryParams.subscribe( params => {console.log(params)
        this.menuState=params.menu || "out";
      }
    );
  }
  ngOnInit() {
    // this.router.navigate([], {
    //     queryParams: {},
    //     relativeTo: this.activeRoute
    // });
  }

}
