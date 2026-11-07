import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HlmSidebar } from '@spartan-ng/helm/sidebar';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';


@Component({
  imports: [HlmSidebar, HlmSidebarImports, RouterLink],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
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
