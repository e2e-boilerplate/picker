import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BASE_URL } from '@picker/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<any> {
    return this.httpClient.get<any>(`${BASE_URL}dependencies/index.json`)
  }
}
