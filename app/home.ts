import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <h1>Home</h1>
    <a routerLink="/home/dog" routerLinkActive="active">home -> dog 로 갑시다.</a>
  `
})

export class Home { }
