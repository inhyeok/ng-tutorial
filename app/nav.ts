import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <a routerLink="/home" routerLinkActive="active">Home으로 갑시다.</a>
  `
})

export class Nav { }
