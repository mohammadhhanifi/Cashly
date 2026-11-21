import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmSidebar } from '@spartan-ng/helm/sidebar';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  matAccountBalanceFillOutline,
  matAccountBalanceOutline,
  matAnalyticsFillOutline,
  matAnalyticsOutline,
  matCategoryFillOutline,
  matCategoryOutline,
  matCloseFillOutline,
  matDonutSmallFillOutline,
  matDonutSmallOutline,
  matReceiptLongFillOutline,
  matReceiptLongOutline,
  matSettingsFillOutline,
  matSettingsOutline,
  matWorkspacePremiumFillOutline,

} from '@ng-icons/material-symbols/outline';



@Component({
  imports: [
    HlmSidebar,
    HlmSidebarImports,
    RouterLink,
    RouterLinkActive,
    HlmCardImports,
    HlmButtonImports,
    NgIcon
  ],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
  providers: [
    provideIcons({
      matAnalyticsOutline, matAnalyticsFillOutline,
      matReceiptLongOutline, matReceiptLongFillOutline,
      matCategoryOutline, matCategoryFillOutline,
      matDonutSmallOutline, matDonutSmallFillOutline,
      matAccountBalanceOutline, matAccountBalanceFillOutline,
      matSettingsOutline, matSettingsFillOutline,
      matWorkspacePremiumFillOutline,
      matCloseFillOutline
    }),
  ],
})
export class Sidebar {
  cardVisible = signal(true);

  upgrade() {
    this.cardVisible.set(false);
  }

  protected readonly _items = [
    { title: 'Dashboard', url: '/dashboard', outlineIcon: 'matAnalyticsOutline', fillIcon: 'matAnalyticsFillOutline' },
    { title: 'Transactions', url: '/transactions', outlineIcon: 'matReceiptLongOutline', fillIcon: 'matReceiptLongFillOutline' },
    { title: 'Categories', url: '/categories', outlineIcon: 'matCategoryOutline', fillIcon: 'matCategoryFillOutline' },
    { title: 'Reports', url: '/reports', outlineIcon: 'matDonutSmallOutline', fillIcon: 'matDonutSmallFillOutline' },
    { title: 'Accounts', url: '/accounts', outlineIcon: 'matAccountBalanceOutline', fillIcon: 'matAccountBalanceFillOutline' },
  ];

  protected readonly _settings = {
    title: 'Settings',url: '/settings',outlineIcon: 'matSettingsOutline',fillIcon: 'matSettingsFillOutline'
  };
  protected readonly _upgradeCard = [
    {url: '/premium',fillIcon: 'matWorkspacePremiumFillOutline'},
    {url: '/',fillIcon: 'matCloseFillOutline',}
  ]
}
