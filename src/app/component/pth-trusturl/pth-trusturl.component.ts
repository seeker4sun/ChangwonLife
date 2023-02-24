import { Component } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pth-trusturl',
  templateUrl: './pth-trusturl.component.html',
  styleUrls: ['./pth-trusturl.component.scss']
})
export class PthTrusturlComponent {
  riskyURL: string;
  trustURL: SafeUrl;   

  constructor(private _sanitizer: DomSanitizer) {
    this.riskyURL = "javascript:alert('hello')";
    this.trustURL = this._sanitizer.bypassSecurityTrustUrl("javascript:alert('hello');");
  }

  transToTrustURL(url: string):SafeUrl{    
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
