import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import {
  Land,
  LandService,
} from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {
  title$ = 'Browser';
  lands$: Observable<Land[]>;
  path: string;

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {
    boilerFacade.path$.subscribe( value => this.path = value);
  }

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ land: null });
    this.getLand();
  }

  private getLand() {
    this.lands$ = this.landService.all();
  }

  goto(id: string) {
    this.boilerFacade.updateBoiler({ land: id});
    // this.router.navigate(['/framework']);
  }
}
