import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ILand } from '@picker/constants';
import { LandService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  title = 'Approach';
  module$: Observable<ILand[]>;
  header$: Observable<any>;

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ module: null});
    this.boilerFacade.buildPath();
    this.module$ = this.landService.getLand();
    this.header$ = this.boilerFacade.header$;
  }

  goto(id: string): void {
    this.boilerFacade.updateBoiler({ module: id})
    this.boilerFacade.buildPath();
    this.header$.subscribe(value => {
      const parts = value.split(' ');
      if(parts.includes('typescript') && parts.includes('cypress') && parts.includes('browser')) {
        this.router.navigate(['/bundler']);
      }
    });
  }
}
