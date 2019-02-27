import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

// import {  } from "@angular/animations";


export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> SearchPage', [
    style({ position: 'relative', height: '100vh' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        background: 'dark',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({ opacity: 0 })
    ]),
    query(':leave', [
      style({ opacity: 1 })
    ]),
    group([
      query(':leave', [
        animate('0.2s ease-out',
          style({ opacity: 0 })
        )
      ]),
      query(':enter', [
        animate('0.2s ease-out',
          style({ opacity: 1 })
        )
      ])
    ]),
  ])
]);
