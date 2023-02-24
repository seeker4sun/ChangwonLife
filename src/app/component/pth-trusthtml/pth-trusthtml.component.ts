import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-pth-trusthtml',
  templateUrl: './pth-trusthtml.component.html',
  styleUrls: ['./pth-trusthtml.component.scss']
})
export class PthTrusthtmlComponent {
  
  notTrustHtml: string = `
    <script>function hello(){ alert("헬로우 메서드 알림창!"); }</script>
    <style>button{font-size:20px;padding:10px;font-style:italic;}</style>
    <button onclick="hello()">메서드 호출 by onclick</button>
    <p>--------------------------</p>
    <button (click)="hello()">메서드 호출 by (click)</button><br><br>
    <button onclick="javascript:alert('헬로우 알림창!')">Hello 알림창 띄우기</button>`;
  trustHtml: SafeHtml;

  constructor(private _sanitizer: DomSanitizer) {    
    this.trustHtml = this._sanitizer.bypassSecurityTrustHtml(this.notTrustHtml);
  }

  hello(){ alert('hello'); }
}
