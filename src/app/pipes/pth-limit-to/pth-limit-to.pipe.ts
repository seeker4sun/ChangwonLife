import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pthLimitTo'
})
export class PthLimitToPipe implements PipeTransform {

  transform(input:any, limit:number): any {
    return input.filter((elem:any, index:any, arr:any)=>{
      if(index<limit) return elem;
    });
  }

}
