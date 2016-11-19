// Import our dependencies
import { Routes } from '@angular/router';
import { Nav }  from './nav';
import { Home }  from './home';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: "home", component: Home},
  { path: "nav", component: Nav}
];
