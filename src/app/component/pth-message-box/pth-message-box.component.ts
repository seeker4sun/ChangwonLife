import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-pth-message-box',
  templateUrl: './pth-message-box.component.html',
  styleUrls: ['./pth-message-box.component.scss'],

  animations: [trigger(
    'openClose',
    [
      state('close', style({ height: '0px' })),
      state('open',  style({ height: '100px', paddingTop: '50px' })),
      transition('void => close', animate(500)),
      transition('close => open', animate(300)),
      transition('open => close', animate('1000ms ease-out'))
    ])]
})
export class PthMessageBoxComponent {
  openOrClose!: string;

  constructor() { this.collapseToClose(); }
  expandToOpen()   { this.openOrClose = 'open'; }
  collapseToClose(){ this.openOrClose = 'close'; }
}

