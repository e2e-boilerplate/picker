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
  boiled$: Observable<any>;
  name: string;

  constructor(private boilerFacade: BoilerFacade) {}

  ngOnInit(): void {
    this.boiled$ = this.boilerFacade.boiled;
    this.getName();
  }

  getName(): void {
    this.boiled$.subscribe( msg => {
      const value = (Object.values(msg)).filter(m => m !== null);
      this.name = value.join('-');
    })
  }
}
