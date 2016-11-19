import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { Home } from './home';
import { Nav } from './nav';

import { routes } from './app.routes';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    Home,
    Nav
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
