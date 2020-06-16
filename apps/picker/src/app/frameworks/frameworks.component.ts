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
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boilerFacade.updateBoiler({framework: null})
    this.sub = this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.getFrameworks();
  }

  getFrameworks() {
    this.frameworks$ = this.frameworksService.all(this.id);
  }

  goto(id: string) {
    if (id === 'no_framework') {
      this.boilerFacade.updateBoiler({framework: null});
      this.router
        .navigateByUrl('/', { skipLocationChange: true })
        .then(() => this.router.navigate([id, 'no_frameworks']));
    } else {
      this.boilerFacade.updateBoiler({framework: id});
      this.router.navigate([id, 'javascript']);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
