import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Framework } from './framework';
import { API_BASE_URL } from '@picker/constants';

@Injectable({
  providedIn: 'root'
})
export class FrameworksService {
  readonly BASE_URL = API_BASE_URL;
  readonly model = 'frameworks';

  constructor(private httpClient: HttpClient) {}

  all(type: string): Observable<Framework[]> {
    return this.httpClient.get<Framework[]>(
      `${this.BASE_URL}${this.model}/${type}.json`
    );
  }
}
