import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'picker-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title;
  // @Input() platform;
  // @Input() framework;

  constructor() {}

  ngOnInit(): void {}
}
