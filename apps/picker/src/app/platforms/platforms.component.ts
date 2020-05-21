import { Component, OnInit } from '@angular/core';

import { PlatformsService } from '@picker/core-data';
import { Platform } from '@picker/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'picker-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
  platforms$: Observable<Platform[]>;
  selectedPlatform: Platform;

  constructor(private platformsService: PlatformsService) { }

  ngOnInit(): void {
    this.getPlatforms();
  }

  getPlatforms() {
    this.platforms$ = this.platformsService.all();
  }
}
