import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Javascript, JavascriptService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent implements OnInit, OnDestroy {
  title = 'JavaScript';
  id: string;
  private sub: any;
  javascripts$: Observable<Javascript[]>;
  boiled$: Observable<any>;
  framework: string;

  constructor(
    private javascriptService: JavascriptService,
    private route: ActivatedRoute,
    private router: Router,
    private boilerFacade: BoilerFacade
  ) {}

  ngOnInit(): void {
    this.boiled$ = this.boilerFacade.boiled;
    this.boilerFacade.updateBoiler({javascript: null});
    this.boiled$.subscribe( value => {
      this.framework = value.framework;
    })
    this.sub = this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.getJavaScripts();
  }

  getJavaScripts() {
    this.javascripts$ = this.framework !== 'cypress'
      ? this.javascriptService.all()
      : this.javascriptService.getForCypress();
  }

  goto(id: string) {
    this.boilerFacade.updateBoiler({javascript: id});
    this.router.navigate([id, 'module']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
