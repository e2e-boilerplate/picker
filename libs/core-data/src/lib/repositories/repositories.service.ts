import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { UTILS_BASE_URL } from '@picker/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  readonly BASE_URL = UTILS_BASE_URL;
  readonly model = 'repositories';

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<any> {
    return this.httpClient
      .get<any>(`${this.BASE_URL}${this.model}.json`);
  }

  getRepoStartWith(start): Observable<any> {
    return this.httpClient
      .get<any>(`${this.BASE_URL}${this.model}.json`)
      .pipe(
        map(items => items.filter(item => item.startsWith(start)))
      );
  }

  getRepoNotStartWith(start): Observable<any> {
    return this.httpClient
      .get<any>(`${this.BASE_URL}${this.model}.json`)
      .pipe(
        map(items => items.filter(item => !item.startsWith(start)))
      );
  }
}
