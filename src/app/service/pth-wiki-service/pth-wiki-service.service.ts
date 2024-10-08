import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

import { handleError } from './async-handling.observable';

@Injectable({
  providedIn: 'root'
})
export class PthWikiServiceService {

  constructor(private http: HttpClient ) { }

  search(keyword: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', keyword);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    //params.set('callback', 'JSONP_CALLBACK');
    let querystring = params.toString();
    return this.http
     .jsonp(wikiUrl+'?'+ querystring, 'JSONP_CALLBACK')
     //.map(response => <string[]>response.json()[1])
     //.catch(handleError);

  }

}
