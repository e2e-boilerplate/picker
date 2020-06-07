import { Component, OnInit, Input } from '@angular/core';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  boiled$;

  constructor( private boilerFacade: BoilerFacade) {}

  ngOnInit(): void {
    this.boiled$ = this.boilerFacade.boiled;
  }
}
