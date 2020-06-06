import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  boiled$: Observable<any>;
  constructor(
    private router: Router,
    private facade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boiled$ = this.facade.boiler$;
    this.facade.updateBoiler( {platform:"sweet home"});
  }

  goto() {
    this.router.navigate(['/platforms']);
  }
}
