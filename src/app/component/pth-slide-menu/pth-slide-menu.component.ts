import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Station } from 'src/app/model/station';

@Component({
  selector: 'app-pth-slide-menu',
  templateUrl: './pth-slide-menu.component.html',
  styleUrls: ['./pth-slide-menu.component.scss'],
  animations:[
    trigger('Title', [      
      transition('void => *', [style({opacity:0}), animate('500ms')])      
    ]),
    trigger('SlidMenu', [
      state('open',  style({height: '30px'})),
      state('close', style({height: '0px'})),
      transition('open => close, close => open', animate('200ms ease-in'))
    ])
  ]
})
export class PthSlideMenuComponent {
  stations: Station[] = [
    new Station('서울역','close'),
    new Station('대전역','close'),
    new Station('대구역','close'),
    new Station('부산역','close')
  ];

  select(name: string){
    alert(name+'을 선택했습니다');
  }
}
