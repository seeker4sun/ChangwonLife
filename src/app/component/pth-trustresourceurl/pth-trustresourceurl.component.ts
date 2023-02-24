import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pth-trustresourceurl',
  templateUrl: './pth-trustresourceurl.component.html',
  styleUrls: ['./pth-trustresourceurl.component.scss']
})
export class PthTrustresourceurlComponent {
  trustResourceURL: SafeResourceUrl;
  
  constructor(private _sanitizer: DomSanitizer) {
    let url="https://angular.io";
    this.trustResourceURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
