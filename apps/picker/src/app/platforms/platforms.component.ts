import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlatformsService } from '@picker/core-data';

import { Platform } from '@picker/core-data';

@Component({
  selector: 'picker-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css'],
})
export class PlatformsComponent implements OnInit {
  title = 'Platform';
  platforms$: Observable<Platform[]>;
  selectedPlatform: String;

  constructor(private platformsService: PlatformsService) {}

  ngOnInit(): void {
    this.getPlatforms();
  }

  getPlatforms() {
    this.platforms$ = this.platformsService.all();
  }

  setSelected(id: String) {
    this.selectedPlatform = id;
  }
}
