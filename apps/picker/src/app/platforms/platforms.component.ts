import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import {
  Picks,
  PicksService,
  Platform,
  PlatformsService,
} from '@picker/core-data';
import { pick } from '@picker/constants';

@Component({
  selector: 'picker-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css'],
})
export class PlatformsComponent implements OnInit {
  title = 'Platform';
  platforms$: Observable<Platform[]>;
  picks: Picks;

  constructor(
    private platformsService: PlatformsService,
    private router: Router,
    private picksService: PicksService
  ) {}

  ngOnInit(): void {
    this.picksService.nextMessage(pick);
    this.picksService.picked.subscribe((message) => (this.picks = message));
    this.getPlatforms();
  }

  getPlatforms() {
    this.platforms$ = this.platformsService.all();
  }

  goto(id: String) {
    this.picks.platform = <string>id;
    this.router.navigate([id, 'frameworks']);
  }
}
