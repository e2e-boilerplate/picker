import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterState, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'picker-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css'],
})
export class FrameworksComponent implements OnInit {
  test: RouterStateSnapshot;

  constructor(private router: Router) {
    const state: RouterState = router.routerState;
    const snapshot: RouterStateSnapshot = state.snapshot;
    const root: ActivatedRouteSnapshot = snapshot.root;
    this.test = snapshot;
  }

  ngOnInit(): void {}
}
