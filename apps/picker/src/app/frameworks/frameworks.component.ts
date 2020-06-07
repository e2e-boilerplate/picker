import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import {
  Framework,
  FrameworksService,
} from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

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

  constructor(
    private frameworksService: FrameworksService,
    private route: ActivatedRoute,
    private router: Router,
    private facade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.facade.updateBoiler({framework: null})
    this.sub = this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.getFrameworks();
  }

  getFrameworks() {
    this.frameworks$ = this.frameworksService.all(this.id);
  }

  goto(id: string) {
    if (id === 'wofnodejs') {
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate([id, 'frameworks']));
    } else {
      this.facade.updateBoiler({framework: id});
      this.router.navigate([id, 'javascript']);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
