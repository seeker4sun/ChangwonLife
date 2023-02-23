import { Component } from '@angular/core';

@Component({
  selector: 'app-pth-order-by',
  templateUrl: './pth-order-by.component.html',
  styleUrls: ['./pth-order-by.component.scss']
})
export class PthOrderByComponent {
  sortMethod = 'asc';
  sortKey    = 'name';
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
