import { Injectable } from '@angular/core';
import { Platform } from './platform';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {
  platforms: Platform[] = [
    { name: 'Nodejs'},
    { name: 'Browser'}
  ]

  constructor() { }

  all(): Platform[] {
    return this.platforms;
  }
}
