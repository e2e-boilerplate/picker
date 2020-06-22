import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private boilerFacade: BoilerFacade,
    ) {}

  ngOnInit(): void {
    this.boilerFacade.resetBoiler();
  }

  goto() {
    this.router.navigate(['/land']);
  }
}
