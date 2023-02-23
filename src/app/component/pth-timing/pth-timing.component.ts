import { Component } from '@angular/core';
import { trigger, transition, style, animate, state, keyframes } from '@angular/animations';

@Component({
  selector: 'app-pth-timing',
  templateUrl: './pth-timing.component.html',
  styleUrls: ['./pth-timing.component.scss'],
  animations: [
    trigger('timing', [
      state('ease-in',     style({ opacity: 1 })), state('ease-out',     style({ opacity: 0 })),
      state('delay-in',    style({ opacity: 1 })), state('delay-out',    style({ opacity: 0 })),
      state('duration-in', style({ opacity: 1 })), state('duration-out', style({ opacity: 0 })),
      transition('* => ease-in', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), animate('0.5s ease-in')
      ]),
      transition('* => ease-out', [
        animate('0.5s 10 ease-out', style({
          opacity: 0, transform: 'translateX(100%)'
        }))
      ]),
      transition('* => delay-in', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), animate('0.2s 500ms')
      ]),
      transition('* => delay-out', [
        animate('0.2s 500ms', style({
          opacity: 0, transform: 'translateX(100%)'
        }))
      ]),
      transition('* => duration-in', [
        style({ opacity: 0, transform: 'translateX(-100%)' }), animate('500ms')
      ]),
      transition('* => duration-out', [
        animate('500ms', style({
          opacity: 0, transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class PthTimingComponent {
  state: string = 'ease-in';

  check(inName: string, outName: string){
    if (this.state == inName || this.state == outName) {
      this.state = (this.state == outName) ? inName:outName;
    } else {
      this.state = inName;
    }
  }
}
