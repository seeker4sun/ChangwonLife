import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-pth-truststyle',
  templateUrl: './pth-truststyle.component.html',
  styleUrls: ['./pth-truststyle.component.scss']
})
export class PthTruststyleComponent {
  imageURL: string = "assets/images/car.png";
  styleURL: string = "url(\'https://angular.io/assets/images/logos/angular/logo-nav@2x.png\')";
  trustStyle: SafeStyle;
  
  constructor(private _sanitizer: DomSanitizer) {
    this.trustStyle = this._sanitizer.bypassSecurityTrustStyle(this.styleURL);
  }
}
