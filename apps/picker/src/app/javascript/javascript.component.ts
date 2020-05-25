import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Javascript, JavascriptService } from '@picker/core-data';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private javascriptService: JavascriptService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((param) => {
      this.id = param['id'];
    });
    this.getJavaScripts();
  }

  getJavaScripts() {
    this.javascripts$ = this.javascriptService.all();
  }

  gotoModules(value: string) {
    // TODO ...
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
