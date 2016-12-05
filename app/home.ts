import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1>Home</h1>
    <a [routerLink]="['dog']" routerLinkActive="active">home -> dog 로 갑시다.</a>
    <router-outlet></router-outlet>
  `
})

export class Home { }
