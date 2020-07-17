import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ILand } from '@picker/constants';
import { LandService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.css']
})
export class RunnerComponent implements OnInit {
  title = 'Approach';
  runner$: Observable<ILand[]>;

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ runner: null});
    this.boilerFacade.buildPath();
    this.runner$ = this.landService.getLand();
  }

  goto(id: string): void {
    this.boilerFacade.updateBoiler({ runner: id})
    this.boilerFacade.buildPath();
    this.router.navigate(['/assertion'])
  }
}
