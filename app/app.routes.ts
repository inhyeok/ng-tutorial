// Import our dependencies
import { Routes } from '@angular/router';
import { Nav }  from './nav';
import { Home }  from './home';
import { HomeDog }  from './home_dog';
import { Chat }  from './chat';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  {
    path: "home",
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'dog',
        component: HomeDog
      }
    ]
  },
  {
    path: "chat",
    component: Chat
  }
];
