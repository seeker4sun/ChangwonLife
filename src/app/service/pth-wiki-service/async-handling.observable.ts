import { HttpResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

export function handleError(error: HttpResponse<any> | any) {
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