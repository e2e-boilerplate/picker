import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILand } from "@picker/constants";
import { BASE_URL } from '@picker/constants';
import { BoilerFacade } from '@picker/boiler';

@Injectable({
  providedIn: 'root'
})
export class LandService {
  path: string;

  constructor(
    private httpClient: HttpClient,
    private boilerFacade: BoilerFacade,
  ) {
    this.boilerFacade.path$.subscribe(path => { this.path = path });
  }

  all(): Observable<ILand[]> {
    return this.httpClient.get<ILand[]>(`${BASE_URL}${this.path}index.json`)
  }

  getLand(): Observable<ILand[]> {
    return this.httpClient.get<ILand[]>(`${BASE_URL}${this.path}/index.json`) // TODO check /
  }
}
