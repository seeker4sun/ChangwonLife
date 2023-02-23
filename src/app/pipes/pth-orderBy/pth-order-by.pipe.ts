import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pthOrderBy'
})
export class PthOrderByPipe implements PipeTransform {

  transform(arr:Array<any>, sortType:string, keyName:string): Array<any> {
    if(!sortType) return arr;

/*     var key = keyName;
    if (keyName === null){
      var keyNames = Object.keys(arr);
      key = keyNames[0].toLowerCase();
    }
*/    
    let key:string = (!!keyName) ? keyName : Object.keys(arr)[0].toLowerCase();
    switch( sortType.toLowerCase()){
      case 'asc':
        arr.sort(function(a,b){
          if(a[key]<b[key]) return -1;
          if(a[key]>b[key]) return  1;
          return 0;
        });
        break;
      case 'desc':
        arr.sort(function(a,b){
          if(a[key]<b[key]) return  1;
          if(a[key]>b[key]) return -1;
          return 0;
        });
        break;
      default:
        break;
    }
    return arr;
  }
}
