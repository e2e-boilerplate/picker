import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { ISummaryCard } from '@picker/constants';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item: ISummaryCard;
  @Output() selected = new EventEmitter<String>();
  version$: Observable<string>;
  id: string;

  constructor(private boilerFacade: BoilerFacade) {}

  ngOnInit(): void {
    this.setId(this.item.id);
    this.version$ = this.boilerFacade.getModuleVersion(this.id);
  }

  selectedItem(value: String): void {
    this.selected.emit(value);
  }

  setId(value: string): void {
    this.id = value === 'webdriverio'? '@wdio/sync' : this.item.id;
  }
}
