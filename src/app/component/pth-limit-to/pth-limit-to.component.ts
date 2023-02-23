import { Component } from '@angular/core';

@Component({
  selector: 'app-pth-limit-to',
  templateUrl: './pth-limit-to.component.html',
  styleUrls: ['./pth-limit-to.component.scss']
})
export class PthLimitToComponent {
  elements : string[]=['컴포넌트','지시자', '서비스','라우터','템플릿','바인딩'];
  numDisplay = 7;
}
