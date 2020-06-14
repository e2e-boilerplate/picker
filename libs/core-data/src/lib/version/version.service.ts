import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { BASE_URL } from '@picker/constants';

@Injectable({
  providedIn: 'root',
})
export class VersionService {

  constructor(private httpClient: HttpClient) {}

  get(module): Observable<any> {
    const m = module === "webdriverio"? "@wdio/sync": module;
    return this.httpClient
      .get<any>(`${BASE_URL}dependencies/index.json`)
      .pipe(map((response) => (response[m])));
  }
}
