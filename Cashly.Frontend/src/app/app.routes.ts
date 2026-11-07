import { Routes } from '@angular/router';
import { Categories } from './pages/categories/categories';
import { MainLayout } from './shared/layout/main-layout/main-layout';

export const routes: Routes = [
  { path: 'categories', component: Categories },
  { path: '', redirectTo: 'categories', pathMatch: "full" },
  { path: '**', redirectTo: 'categories' },

];
