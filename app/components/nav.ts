import { Component } from '@angular/core';

@Component({
  selector: 'nav',
  template: `
    <a routerLink="/github" routerLinkActive="active">github 정보 확인하러 갑시다.</a>
    <a routerLink="/chat" routerLinkActive="active">chat으로 갑시다.</a>
  `
})

export class NavComponent { }
