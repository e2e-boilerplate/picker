import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Platform } from '@picker/core-data';

@Component({
  selector: 'picker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item: Platform;
  @Output() selected = new EventEmitter<Platform>();

  constructor() {}

  ngOnInit(): void {}

  selectedItem(value: Platform) {
    this.selected.emit(value);
  }
}
