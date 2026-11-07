import { Routes } from '@angular/router';
import { Categories } from './pages/categories/categories';
import { MainLayout } from './shared/layout/main-layout/main-layout';
import { Transactions } from './pages/transactions/transactions';

export const routes: Routes = [
  { path: 'categories', component: Categories },
  { path: 'transactions', component: Transactions },
  { path: '', redirectTo: 'categories', pathMatch: "full" },
  { path: '**', redirectTo: 'categories' },

];
