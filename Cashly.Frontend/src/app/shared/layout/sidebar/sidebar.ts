import { Component, inject, Signal, signal } from '@angular/core';
import { isActive, Router, RouterLink, RouterLinkActive } from '@angular/router';
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
      outlineIcon: '/icons/sidebar/outline/dashboard.svg',
      fillIcon: 'icons/sidebar/fill/dashboard.svg'
    },
    {
      title: 'Transactions',
      url: '/transactions',
      outlineIcon: '/icons/sidebar/outline/receipt_long.svg',
      fillIcon: '/icons/sidebar/fill/receipt_long.svg',
    },
    {
      title: 'Categories',
      url: '/categories',
      outlineIcon: '/icons/sidebar/outline/category.svg',
      fillIcon: '/icons/sidebar/fill/category.svg',
    },
    {
      title: 'Reports',
      url: '/reports',
      outlineIcon: '/icons/sidebar/outline/donut_small.svg',
      fillIcon: '/icons/sidebar/fill/donut_small.svg',
    },
    {
      title: 'Accounts',
      url: '/accounts',
      outlineIcon: '/icons/sidebar/outline/account_balance.svg',
      fillIcon: '/icons/sidebar/fill/account_balance.svg',
    },
  ];

  protected readonly _settings = {
    title: 'Settings',
    url: '/settings',
    outlineIcon: '/icons/sidebar/outline/settings.svg',
    fillIcon: '/icons/sidebar/fill/settings.svg',
  };
}
