import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'pthSafe'
})
export class PthSafePipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){
    //this.sanitizer = sanitizer;
  }

  transform(style:string) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
