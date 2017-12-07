import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import {appendQuery}  from 'append-query'
import {ActivatedRoute,Router} from "@angular/router";
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
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.changeParams();
  }
  toggleFullMenu() {
    this.menuState = this.menuState === 'in' ? 'full' : 'in';
    this.changeParams();
  }
  params={};
  changeParams(){
    this.params={};
      if(this.menuState=="full"){
          this.params["checkout"]=true
      }
      if(this.menuState=="in"){
        this.params["cart"]=true
      }
      this.router.navigate([], {
         queryParams: {...this.params},
      });

  }


  constructor(private route: ActivatedRoute,private router:Router) {
      this.route.queryParams.subscribe( params => {
        if(params.cart)
        this.menuState=params.cart?"in":"out"
        if(params.checkout)
        this.menuState=params.checkout?"full":"out"
      }
    );
  }
  ngOnInit() {
    // console.log("hei")
  }

}
