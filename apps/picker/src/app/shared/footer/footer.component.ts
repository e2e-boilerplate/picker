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
  boiled$: Observable<any>;
  name: string;
  list$: Observable<any>;

  constructor(
    private repositoriesService: RepositoriesService,
    private boilerFacade: BoilerFacade
    ) { }

  ngOnInit(): void {
    this.boiled$ = this.boilerFacade.boiled$;
    this.getRepositories();
    this.getName();
    this.getFiltered();
  }

  getRepositories() {
    this.repositories$ = this.repositoriesService.get();
  }

  getName(): void {
    this.boiled$.subscribe( msg => {
      const value = (Object.values(msg)).filter(m => m !== null);
      this.name = value.join('-');
    })
  }

  getFiltered() {
    if (this.name === 'browser'){
      this.list$ = this.repositoriesService.getRepoStartWith('cypress');
    } else if(this.name.startsWith('browser')) {
      this.list$ = this.repositoriesService.getRepoStartWith(this.name.slice(8));
    } else if(this.name === 'nodejs'){
      this.list$ = this.repositoriesService.getRepoNotStartWith('cypress');
    } else if(this.name.startsWith('nodejs')){
      this.list$ = this.repositoriesService.getRepoStartWith(this.name.slice(7));
    } else {
      this.list$ = this.repositoriesService.get();
    }
  }
}
