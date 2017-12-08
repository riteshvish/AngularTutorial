import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import {appendQuery}  from 'append-query'
import {ActivatedRoute,Router} from "@angular/router";
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app works 2!';
//   getState(outlet) {
//     return outlet.activatedRouteData.state;
//   }
// }

// import { RouteParams } from '@angular/router';
// import {Router, ROUTER_DIRECTIVES, RouteParams} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent implements OnInit {
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
        this.router.navigate([], {
           queryParams: {...params},
        });
      }
    );
  }
  ngOnInit() {
    // console.log("hei")
  }
  /*
  how to set query string
  // this.params you existing querystring
  // [] you route eg ["/cart"] empty means add qurery on the same route
  // empty route will not reload page
  constructor(private router:Router) {}
  this.router.navigate([], {
     queryParams: {...this.params,"key1","value"},
  });

  how to get query string
  constructor(private route: ActivatedRoute) {}
  this.route.queryParams.subscribe( params => {
    console.log(params)
  })

  how to remove query string eg=pid=123
  eg you want to remove pid
  get your all the querystring

  constructor(private route: ActivatedRoute,private router:Router) {}
  this.route.queryParams.subscribe( params => {
    // params will have all the querystring
    delete params.pid;
    console.log(params)
    then query string again
    this.router.navigate([], {
      queryParams: {...this.params},
    });
  })


  */

}
