import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Platform } from './platform';

const BASE_URL = 'https://e2e-boilerplate.github.io/api/v1/'

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {
  model = 'platforms';

  constructor(private httpClient: HttpClient) { }

  all(){
    return this.httpClient.get(`${BASE_URL}${this.model}.json`);
  }
}
