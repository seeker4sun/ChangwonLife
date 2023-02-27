import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-pth-item-edit',
  templateUrl: './pth-item-edit.component.html',
  styleUrls: ['./pth-item-edit.component.scss']
})
export class PthItemEditComponent implements OnInit {
  @Input()  person1!: Person;
  @Output() doPut    = new EventEmitter<Person>();
  @Output() doDelete = new EventEmitter<Person>();

  isEdit     = false;
  editedName = '';
  ngOnInit(){this.editedName = this.person1.name;}

  put(val:string):void{
    this.person1.name = this.editedName;
    this.doPut.emit(this.person1);
    this.isEdit = false;
  }
  
  delete():void{
    if (confirm("삭제하시겠습니까?")) {
      this.doDelete.emit(this.person1);
      this.isEdit = false;
    }
  }
}
