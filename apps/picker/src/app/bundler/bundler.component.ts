import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ILand } from '@picker/constants';
import { LandService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-bundler',
  templateUrl: './bundler.component.html',
  styleUrls: ['./bundler.component.css']
})
export class BundlerComponent implements OnInit {
  title = 'Bundler';
  bundler$: Observable<ILand[]>

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ bundler: null });
    this.boilerFacade.buildPath();
    this.bundler$ = this.landService.getLand();
  }

  goto(id: string) {
    this.boilerFacade.updateBoiler({ bundler: id});
    this.boilerFacade.buildPath();
    // this.router.navigate(['/approach']);
  }
}
