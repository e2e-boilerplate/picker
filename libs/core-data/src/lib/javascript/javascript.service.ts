import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Javascript } from './javascript';
import { BASE_URL } from '@picker/constants';

@Injectable({
  providedIn: 'root',
})
export class JavascriptService {

  constructor(private httpClient: HttpClient) {}

  get(path: string): Observable<Javascript[]> {
    return this.httpClient.get<Javascript[]>(
      `${BASE_URL}platforms/${path}index.json`
    );
  }
}
