import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Platform, VersionService } from '@picker/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'picker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item: Platform;
  @Output() selected = new EventEmitter<String>();
  version$: Observable<any>;

  constructor(private versionService: VersionService) {}

  ngOnInit(): void {
    this.getVersion();
    this.version$.subscribe(value => {
      console.log(`v: ${JSON.stringify(value)}`);
    });
  }

  selectedItem(value: String) {
    this.selected.emit(value);
  }

  getVersion() {
    this.version$ = this.versionService.get(this.item.id);
  }
}
