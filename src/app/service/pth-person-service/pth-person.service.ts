import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Person } from 'src/app/model/person';


@Injectable({
  providedIn: 'root'
})
export class PthPersonService {
  private personsUrl = 'app/persons';
  private headers    = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
    // .pipe( 
    //     catchError(this.handleError)
    //   );
  }
  
  addPerson(name: string): Observable<Person> {
    const body = { name };
    return this.http.post<Person>(this.personsUrl, body, { headers:this.headers });
  }

  putPerson(p: Person): Observable<Person> {
    return this.http.put<Person>(`${this.personsUrl}/${p.id}`, p, { headers:this.headers });
  }

  delPerson(p: Person): Observable<Person> {
    return this.http.delete<Person>(`${this.personsUrl}/${p.id}`, { headers:this.headers });
  }

  handleError(error: HttpResponse<any> | any) {
    let errMsg: string;
    if (error instanceof HttpResponse) {
      const body = error.body || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(() => new Error(errMsg)); //Observable.throw(errMsg);
  }
}
