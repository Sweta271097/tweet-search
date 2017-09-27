
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../environments/environment';

// injecting service into module
@Injectable()

export class SearchService {

  constructor(private _http: Http) {}

  serverUrl = environment.serverUrl;

  search(query: String) {

    return this._http.get(this.serverUrl + query)
      .map(
        (res: Response) => {
          return res;
        }
      );
  }

}
