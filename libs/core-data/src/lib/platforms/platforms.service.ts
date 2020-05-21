import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { Platform } from './platform';
import { Observable, throwError } from 'rxjs';

const BASE_URL = 'https://e2e-boilerplate.github.io/api/v1/';

@Injectable({
  providedIn: 'root',
})
export class PlatformsService {
  model = 'platforms';

  constructor(private httpClient: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  all(): Observable<Platform[]>{
    return this.httpClient
      .get<Platform[]>(`${BASE_URL}${this.model}.json`);
  }
}
