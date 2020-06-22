import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ILand } from '@picker/constants';
import { LandService } from '@picker/services';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
  title = 'Land';
  lands$: Observable<ILand[]>;

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ land: null });
    this.boilerFacade.buildPath();
    this.lands$ = this.landService.all();
  }

  goto(id: string) {
    this.boilerFacade.updateBoiler({ land: id});
    this.boilerFacade.buildPath();
    this.router.navigate(['/framework']);
  }
}
