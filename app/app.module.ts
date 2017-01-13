import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './components/app';
import { HomeComponent } from './components/home';
import { GithubBranchComponent } from './components/github_branch';
import { NavComponent } from './components/nav';
import { ChatComponent } from './components/chat';

import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    GithubBranchComponent,
    NavComponent,
    ChatComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
