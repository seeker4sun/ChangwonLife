import { Component } from '@angular/core';

@Component({
  selector: 'app-pth-filter',
  templateUrl: './pth-filter.component.html',
  styleUrls: ['./pth-filter.component.scss']
})
export class PthFilterComponent {
  min = 10;
  max = 70;
  range : Array<number> = [10,20,30,40,50,60,70,80,90,100];
  members : Array<{name:string, age:number}> = [
    {name:'김유신',  age:11},
    {name:'문무왕',  age:27},
    {name:'원효대사',age:37},
    {name:'혜초',    age:42},
    {name:'장보고',  age:58},
    {name:'대조영',  age:66},
    {name:'강감찬',  age:90}
  ];
}
