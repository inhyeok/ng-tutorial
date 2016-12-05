import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <a routerLink="/home" routerLinkActive="active">Home으로 갑시다.</a>
    <a routerLink="/nav" routerLinkActive="active">Nav로 갑시다.</a>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {}
