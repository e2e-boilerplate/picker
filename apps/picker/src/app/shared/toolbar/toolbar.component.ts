import { Component, OnInit, Input } from '@angular/core';
import { BoilerFacade } from '@picker/boiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'picker-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  header$: Observable<any>;

  constructor(private boilerFacade: BoilerFacade) {}

  ngOnInit(): void {
    this.boilerFacade.buildHeader();
    this.header$ = this.boilerFacade.header$;
  }
}
