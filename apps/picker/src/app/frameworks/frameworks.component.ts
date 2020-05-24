import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Framework } from "@picker/core-data";
import { FrameworksService } from '@picker/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'picker-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css'],
})
export class FrameworksComponent implements OnInit, OnDestroy {
  title = 'Frameworks';
  id: string;
  private sub: any;
  frameworks$: Observable<Framework[]>;

  constructor(private frameworksService: FrameworksService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(param => {
      this.id = param['id'];
    });
    this.getFrameworks();
  }

  getFrameworks() {
    this.frameworks$ = this.frameworksService.all(this.id);
  }

  gotoNext(id) {
    return true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
