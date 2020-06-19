import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Land } from "./land";
import { BASE_URL } from '@picker/constants';
import { BoilerFacade } from '@picker/boiler';


@Injectable({
  providedIn: 'root'
})
export class LandService {
  path$: Observable<string>;
  path: string;

  constructor(private httpClient: HttpClient, private boilerFacade: BoilerFacade) {
    // this.boilerFacade.path$.subscribe(path => { this.path = path});
    this.path$ = this.boilerFacade.path$;
  }

  all(): Observable<Land[]> {

    this.path$.pipe().subscribe(value => this.path = value)
    return this.httpClient.get<Land[]>(
      `${BASE_URL}platforms/${this.path}/index.json`
    );
  }
}
