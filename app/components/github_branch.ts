import { Component } from '@angular/core';
// import { GithubApi } from '../services/github_api'

@Component({
  selector: 'branch',
  template: `<h2>github branch</h2>`
  // providers: [GithubApi]
})

export class GithubBranchComponent {
  // constructor(private githubApi: GithubApi) {}
  // branch = this.githubApi.get_branch()
}
