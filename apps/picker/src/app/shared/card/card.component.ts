import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { VersionService } from '@picker/core-data';
import { ISummaryCard } from '@picker/constants';

@Component({
  selector: 'picker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item: ISummaryCard;
  @Output() selected = new EventEmitter<String>();
  version$: Observable<string>;

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.getVersion();
  }

  getVersion(): void {
    this.version$ = this.versionService.get(this.item.id);
  }

  selectedItem(value: String): void {
    this.selected.emit(value);
  }
}
