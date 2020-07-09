import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILand } from '@picker/constants';
import { LandService } from '@picker/core-data';
import { Router } from '@angular/router';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-approach',
  templateUrl: './approach.component.html',
  styleUrls: ['./approach.component.css']
})
export class ApproachComponent implements OnInit {
  title = 'Approach'
  approach$: Observable<ILand[]>

  constructor(
    private landService: LandService,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) { }

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({ approach: null});
    this.boilerFacade.buildPath();
    this.approach$ = this.landService.getLand();
  }

  goto(id: string) {
    this.boilerFacade.updateBoiler({ approach: id })
    this.boilerFacade.buildPath();
    this.router.navigate(['/framework'])
  }
}
