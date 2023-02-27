import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PthPersonService } from 'src/app/service/pth-person-service/pth-person.service'

@Component({
  selector: 'app-pth-person-list',
  templateUrl: './pth-person-list.component.html',
  styleUrls: ['./pth-person-list.component.scss']
})
export class PthPersonListComponent  implements OnInit {
  
  persons: Person[] =[];
  mode          = 'Observable';
  resultMessage = '';
  errMessage    = '';
  constructor(private personService: PthPersonService){}
  ngOnInit() {this.getPersons();}

  getPersons() {
    this.personService.getPersons()
      .subscribe({
          next: (persons:Person[])=>{this.persons    = persons; },
          error:(error:Error)     =>{this.errMessage = error.message;},
          complete:()             =>{console.info('complete: getPersons');}
      });
  }

  addPerson(name: string){
    if (!name) { return; }
    this.personService.addPerson(name).subscribe({
      next:(person:Person)=> this.persons.push(person),
      error:(error:Error) => this.errMessage = <any>error,
      complete:()         => console.info('complete: addPerson')
    });
  }

  doPut(evPerson: Person):void {
    this.personService.putPerson(evPerson)
      .subscribe({
        next:result => this.resultMessage = result ? JSON.stringify(result) : '',
        error:error => this.errMessage = <any>error
       }).add(this.getPersons());
  }

  doDelete(evPerson: Person):void {
    this.personService.delPerson(evPerson)
      .subscribe({
        next: result => this.resultMessage = result ? JSON.stringify(result) : '',
        error:error  => this.errMessage = <any>error
      }).add(this.getPersons());
  }

}
