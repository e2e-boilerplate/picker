import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Javascript } from './javascript';
import { API_BASE_URL } from '@picker/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JavascriptService {
  readonly BASE_URL = API_BASE_URL;
  readonly model = 'javascript';

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Javascript[]> {
    return this.httpClient.get<Javascript[]>(
      `${this.BASE_URL}${this.model}.json`
    );
  }

  getForCypress(): Observable<Javascript[]> {
    return this.httpClient.get<Javascript[]>(
      `${this.BASE_URL}${this.model}.json`
    ).pipe(
      map(items => items.filter(item => item.id !== 'commonjs'))
    )
  }
}
