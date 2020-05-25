import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'picker-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  @Input() picks;
  picked: Array<string> = [];

  constructor() {}

  ngOnInit(): void {
    this.filterPicks();
  }

  filterPicks() {
    if(this.picks) {
      for (const pick in this.picks) {
        if (this.picks.hasOwnProperty(pick) && this.picks[pick] !== '') {
          this.picked.push(this.picks[pick]);
        }
      }
    }
  }
}
