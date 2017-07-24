/**
 * Created by yossih on 24/07/2017.
 */
import {trigger, state, animate, transition, style, group} from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    transition(':enter', [
      style({opacity: 0, filter: 'blur(10px)'}),
      group([
        animate('0.5s 100ms', style({opacity: 1})),
        animate('0.7s', style({filter: 'blur(0px)'})),
      ])


    ])
  ]);
;
