import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import {
  Platform,
  PlatformsService,
} from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css'],
})
export class PlatformsComponent implements OnInit {
  title = 'Platform';
  platforms$: Observable<Platform[]>;

  constructor(
    private platformsService: PlatformsService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ platform: null});
    this.getPlatforms();
  }

  getPlatforms() {
    this.platforms$ = this.platformsService.all();
  }

  goto(id: String) {
    this.boilerFacade.updateBoiler({ platform: id});
    this.router.navigate(['/land']);
  }
}
