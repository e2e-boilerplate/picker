import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Platform } from '@picker/core-data';
import { PlatformsService } from '@picker/core-data';

@Component({
  selector: 'picker-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css'],
})
export class PlatformsComponent implements OnInit {
  title = 'Platform';
  platforms$: Observable<Platform[]>;

  constructor(private platformsService: PlatformsService, private router: Router) {}

  ngOnInit(): void {
    this.getPlatforms();
  }

  getPlatforms() {
    this.platforms$ = this.platformsService.all();
  }

  gotoFrameworks(id: String) {
    this.router.navigate(['/frameworks', id]);
  }
}
