// Import our dependencies
import { Routes } from '@angular/router';
import { NavComponent }  from './components/nav';
import { HomeComponent }  from './components/home';
import { GithubBranchComponent }  from './components/github_branch';
import { ChatComponent }  from './components/chat';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  {
    path: "github",
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'branch',
        component: GithubBranchComponent
      }
    ]
  },
  {
    path: "chat",
    component: ChatComponent
  }
];
