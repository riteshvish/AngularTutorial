import {trigger, state, animate, style, transition} from '@angular/core';
// import { trigger, animate, transition, style, query } from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),

    // transition(':enter', [   // :enter is alias to 'void => *'
    //   style({ opacity: 0 }),
    //   animate(300, style({ opacity: 1 }))
    // ]),
    // transition(':leave', [   // :leave is alias to '* => void'
    //   animate(300, style({ opacity: 0 }))
    // ])
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);

}

// import {trigger, state, animate, style, transition,keyframes} from '@angular/core';
// // import { trigger, animate, transition, style, query } from '@angular/animations';
//
// export function routerTransition() {
//   return slideToLeft();
// }
//
// function slideToLeft() {
//   return trigger('routerTransition', [
//         state('void' , style({ opacity: 1, transform: 'none' })),
//         state('*', style({ opacity: 0, transform: 'translateY(10px)' })),
//         transition('void => *', [
//         animate(300, keyframes([
//           style({opacity: 0, transform: 'translateY(10px)', offset: 0}),
//           style({opacity: 0.5, transform: 'translateY(4px)', offset: 0.3}),
//           style({opacity: 0.8, transform: 'translateY(1px)', offset: 0.5}),
//           style({opacity: 0.9, transform: 'translateY(0)',  offset: 0.9}),
//           style({opacity: 1, transform: 'none', offset: 1.0})
//         ]))
//       ])
//
//   ]);
//
// }
