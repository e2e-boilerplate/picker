import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { Platform } from './platform';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  readonly BASE_URL = 'https://e2e-boilerplate.github.io/api/v1/';
  readonly model = 'platforms';

  constructor(private httpClient: HttpClient) {}

  all(): Observable<Platform[]> {
    return this.httpClient.get<Platform[]>(
      `${this.BASE_URL}${this.model}.json`
    );
  }
}
