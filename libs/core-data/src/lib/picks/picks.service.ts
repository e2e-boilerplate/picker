import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Picks } from './picks';
import { pick } from '@picker/constants';

@Injectable({
  providedIn: 'root'
})
export class PicksService {
  private selected: BehaviorSubject<Picks> = new BehaviorSubject(pick);
  picked = this.selected.asObservable();

  constructor() { }

  nextMessage(message: Picks) {
    this.selected.next(message)
  }
}
