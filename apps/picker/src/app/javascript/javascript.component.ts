import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ILand } from '@picker/constants';
import { LandService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  title = 'JavaScript';
  javascript$: Observable<ILand[]>

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ javascript: null});
    this.boilerFacade.buildPath();
    this.javascript$ = this.landService.getLand();
  }

  goto(id: string): void {
   this.boilerFacade.updateBoiler({ javascript: id})
   this.boilerFacade.buildPath();
   // this.router.navigate([]);
  }
}
