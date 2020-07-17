import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LandService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';
import { Observable } from 'rxjs';
import { ILand } from '@picker/constants';

@Component({
  selector: 'picker-assertion',
  templateUrl: './assertion.component.html',
  styleUrls: ['./assertion.component.css']
})
export class AssertionComponent implements OnInit {
  title = 'Assertion';
  assertion$: Observable<ILand[]>

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) { }

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ assertion: null});
    this.boilerFacade.buildPath();
    this.assertion$ = this.landService.getLand();
  }

  goto(id: string) {
    this.boilerFacade.updateBoiler({ assertion: id })
    this.boilerFacade.buildPath();
    this.router.navigate(['/end'])
  }
}
