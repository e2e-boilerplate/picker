import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { API_BASE_URL } from '@picker/constants';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  readonly BASE_URL = API_BASE_URL;
  readonly model = 'dependencies';

  constructor(private httpClient: HttpClient) {}

  get(module): Observable<any> {
    const m = module === "webdriverio"? "@wdio/sync": module;
    return this.httpClient
      .get<any>(`${this.BASE_URL}${this.model}/index.json`)
      .pipe(map((response) => (response[m])));
  }
}
