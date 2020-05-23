import { Component, OnInit } from '@angular/core';
import { PlatformsService } from '@picker/core-data';
import { Observable, throwError } from 'rxjs';

import { Platform } from '@picker/core-data';

@Component({
  selector: 'picker-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css'],
})
export class PlatformsComponent implements OnInit {
  title = 'Platform';
  platforms$: Observable<Platform[]>;
  selectedPlatform: Platform;

  constructor(private platformsService: PlatformsService) {}

  ngOnInit(): void {
    this.getPlatforms();
  }

  getPlatforms() {
    this.platforms$ = this.platformsService.all();
  }

  setSelected(platform: Platform) {
    this.selectedPlatform = platform;
  }
}
