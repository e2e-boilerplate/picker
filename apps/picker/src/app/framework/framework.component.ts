import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ILand } from '@picker/constants';
import { LandService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  title = 'Approach'
  approach$: Observable<ILand[]>

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ approach: null});
    this.boilerFacade.buildPath();
    this.approach$ = this.landService.getLand();
  }

  goto(id: string) {
    this.boilerFacade.updateBoiler({ approach: id})
    this.boilerFacade.buildPath();
    // this.router.navigate([])
  }

}
