import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { Home } from './home';
import { HomeDog } from './home_dog';
import { Nav } from './nav';

import { routes } from './app.routes';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    Home,
    HomeDog,
    Nav
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
