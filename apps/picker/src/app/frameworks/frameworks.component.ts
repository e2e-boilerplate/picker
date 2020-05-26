import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Framework, FrameworksService, Picks, PicksService } from '@picker/core-data';

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
  picks: Picks;

  constructor(
    private frameworksService: FrameworksService,
    private route: ActivatedRoute,
    private router: Router,
    private picksService: PicksService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.router.onSameUrlNavigation = 'reload';
    this.picksService.picked.subscribe(message => this.picks = message);
    this.getFrameworks();
  }

  getFrameworks() {
    this.frameworks$ = this.frameworksService.all(this.id);
  }

  goto(id: string) {
    this.picks.framework = <string>id;
    this.picksService.nextMessage(this.picks);
    if (id === 'noframework') {
      id = 'none';
      this.router.navigate([id, 'framework'],{relativeTo:this.route});
    } else {
      this.router.navigate([id, 'javascript']);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.router.onSameUrlNavigation = 'ignore';
  }
}
