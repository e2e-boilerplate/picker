import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RepositoriesService } from '@picker/core-data';
import { BoilerFacade } from '@picker/boiler';

@Component({
  selector: 'picker-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  repositories$: Observable<any>;

  constructor(
    private repositoriesService: RepositoriesService,
    private boilerFacade: BoilerFacade
    ) { }

  ngOnInit(): void {
    this.getRepositories();
    this.getFiltered();
  }

  getRepositories() {
    this.repositories$ = this.repositoriesService.get();
  }

  getFiltered() {
  }
}
