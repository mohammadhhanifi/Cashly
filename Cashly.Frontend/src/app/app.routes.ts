import { Routes } from '@angular/router';
import { Categories } from './pages/categories/ui/categories';
import { Sidebar } from './shared/layout/sidebar/sidebar';

export const routes: Routes = [
  {path:'categories',component:Categories},
  {path:'sidebar',component:Sidebar}
];
