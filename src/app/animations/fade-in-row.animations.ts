/**
 * Created by yossih on 24/07/2017.
 */
import {trigger, state, animate, transition, style, keyframes, group} from '@angular/animations';

export const fadeInRow =
  trigger('fadeInRow', [
    transition(':enter', [
      style({ opacity: '0',background:'red'}),
      animate('.5s .3s ease-in', style({ opacity: '1',background:'transparent' })),
    ]),
  ]);


