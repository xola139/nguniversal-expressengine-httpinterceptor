import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        Welcome to {{title}}!!
      </h1>
      <p>{{data}}</p>
      <div fxLayout.xs="column" fxLayoutWrap.xs="nowrap">
        <div class="test" fxFlex.gt-xs="calc(100% / 3)" *ngFor="let item of list" [innerHTML]="item"></div>
      </div>
    </div>
  `,
  styles: [`.test { background-color: red; margin: 5px 0; border: 1px solid white; }`]
})
export class AppComponent implements OnInit {

  title = 'app';
  data = '';
  list = [`Hello`, `world !<br>Flex`, `layout`, `issue`];

  constructor(protected apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getData().subscribe((response) => {
      this.data = response.data;
    }, (error) => {
      this.data = 'Error with HTTP request';
    });

  }

}
