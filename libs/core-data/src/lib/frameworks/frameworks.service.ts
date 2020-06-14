import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Framework } from './framework';
import { BASE_URL } from '@picker/constants';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {
  constructor(private httpClient: HttpClient) {}

  all(type: string): Observable<Framework[]> {
    return this.httpClient.get<Framework[]>(
      `${BASE_URL}platforms/${type}/index.json`
    );
  }
}
