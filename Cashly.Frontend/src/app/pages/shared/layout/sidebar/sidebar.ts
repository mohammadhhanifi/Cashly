import { Component } from '@angular/core';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { lucideCalendar, lucideHouse, lucideInbox, lucideSearch, lucideSettings } from '@ng-icons/lucide';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  imports: [HlmSidebarImports, NgIcon],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
  providers: [
    provideIcons({
      lucideHouse,
      lucideInbox,
      lucideCalendar,
      lucideSearch,
      lucideSettings,
    }),
  ],
})
export class Sidebar {
  protected readonly _items = [
    {
      title: 'Home',
      url: '#',
      icon: 'lucideHouse',
    },
    {
      title: 'Inbox',
      url: '#',
      icon: 'lucideInbox',
    },
    {
      title: 'Calendar',
      url: '#',
      icon: 'lucideCalendar',
    },
    {
      title: 'Search',
      url: '#',
      icon: 'lucideSearch',
    },
    {
      title: 'Settings',
      url: '#',
      icon: 'lucideSettings',
    },
  ];
}
