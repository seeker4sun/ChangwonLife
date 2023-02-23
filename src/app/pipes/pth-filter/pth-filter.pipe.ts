import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pthFilter'
})
export class PthFilterPipe implements PipeTransform {

  transform(input:Array<{name:string, age:number}>, min:number, max:number): any {
    return input.filter((member:{name:string, age:number})=>{
      if(member.age >= min && member.age <= max) return true;
      else return false;
    });
  }
}
