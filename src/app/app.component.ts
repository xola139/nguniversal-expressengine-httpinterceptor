import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <p>{{data}}</p>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  title = 'app';
  data = '';

  constructor(protected apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getData().subscribe((response) => {
      this.data = response.data;
    }, (error) => {
      this.data = 'Error with HTTP request';
    });

  }

}
