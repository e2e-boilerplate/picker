import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'picker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item;
  style = {};

  constructor() {}

  ngOnInit(): void {
    this.setStyle();
  }

  setStyle() {
    if (this.item.avatar) {
      this.style = {
        'background-image': `url("/assets/avatars/${this.item.avatar}.png")`,
      };
    }
  }
}
