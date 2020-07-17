import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {
  title = 'End'
  header$: Observable<any>;

  constructor(
    private boilerFacade: BoilerFacade
  ) { }

  ngOnInit(): void {
    this.boilerFacade.buildHeader();
    this.header$ = this.boilerFacade.header$;
  }
}
