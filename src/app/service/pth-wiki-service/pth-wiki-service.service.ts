import { Injectable } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';

//import { handleError } from './async-handling.promise';

@Injectable({
  providedIn: 'root'
})
export class PthWikiServiceService {

  constructor(private httpJsonp: HttpClientJsonpModule) { }

  search(keyword: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', keyword);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    //return this.httpJsonp.jsonp
      // .jsonp(wikiUrl, { search: params })
      // .toPromise()
      // .then(resp:any => <string[]>resp.json()[1])
      // .catch(handleError);
  }

}
