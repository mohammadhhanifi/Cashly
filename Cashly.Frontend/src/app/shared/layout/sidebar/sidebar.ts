import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmSidebar } from '@spartan-ng/helm/sidebar';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { delay } from 'rxjs';




@Component({
  imports: [
    HlmSidebar,
    HlmSidebarImports,
    RouterLink,
    RouterLinkActive,
    HlmCardImports,
    HlmButtonImports
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  cardVisible = signal(true);
  
  upgrade() {
    this.cardVisible.set(false);
  }

  protected readonly _items = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: '/icons/sidebar/outline/dashboard.svg',
    },
    {
      title: 'Transactions',
      url: '/transactions',
      icon: '/icons/sidebar/outline/receipt_long.svg',
    },
    {
      title: 'Categories',
      url: '/categories',
      icon: '/icons/sidebar/outline/category.svg',
    },
    {
      title: 'Reports',
      url: '/reports',
      icon: '/icons/sidebar/outline/donut_small.svg',
    },
    {
      title: 'Accounts',
      url: '/accounts',
      icon: '/icons/sidebar/outline/account_balance.svg',
    },
  ];

  protected readonly _settings = {
    title: 'Settings',
    url: '/settings',
    icon: '/icons/sidebar/outline/settings.svg',
  };
}
