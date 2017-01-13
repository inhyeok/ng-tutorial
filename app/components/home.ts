import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1>Github</h1>
    <a [routerLink]="['branch']" routerLinkActive="active">github branch 보러 갑니다.</a>
    <router-outlet></router-outlet>
  `
})

export class HomeComponent { }
