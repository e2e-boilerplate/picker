import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Platform } from './platform';
import { BASE_URL } from '@picker/constants';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  readonly model = 'platforms';

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Platform[]> {
    return this.httpClient.get<Platform[]>(
      `${BASE_URL}${this.model}/index.json`
    );
  }
}
