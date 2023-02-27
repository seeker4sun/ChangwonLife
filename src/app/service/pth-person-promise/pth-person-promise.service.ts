import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from 'src/app/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl = 'app/persons';
  constructor(private http: HttpClient) { }
  private extractData(res: HttpResponse<Person>) {
    // let body = res.json();
    // return body.data || {};
  }  


  getPersons(): Promise<Person[]|undefined> {
    return this.http.get<Person[]>(this.apiUrl).pipe(
        catchError(error => {
          console.error(error);
          return throwError(error);
        })
      ).toPromise()
   //   .then()
  }
}
