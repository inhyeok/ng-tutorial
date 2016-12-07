import { Component, Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
class githubApi {
  constructor(private http: Http) { }
  get_branch() {
    return this.http
      .get('/repos/inhyeok/ng-tutorial/git/commits/f79ba8d1c58f4b369fba7e1c3b715aa193f5106f')
      .map((res:Response) => res.json())
  }
}