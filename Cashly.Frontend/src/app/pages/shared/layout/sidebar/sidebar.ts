import { NgTemplateOutlet } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

interface NavItem {
  label: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [HlmSidebarImports, RouterLink, RouterLinkActive, NgTemplateOutlet],
  host: { class: 'contents' },
  template: `
    <hlm-sidebar variant="floating" sidebarContainerClass="p-3">
      <hlm-sidebar-header class="items-center px-4 py-8">
        <span class="text-[28px] leading-[1.3] font-semibold">
          <span class="text-primary">Cash</span>ly
        </span>
      </hlm-sidebar-header>

      <hlm-sidebar-content>
        <hlm-sidebar-group>
          <div hlmSidebarGroupContent>
            <ul hlmSidebarMenu class="gap-5">
              @for (item of navItems; track item.link) {
                <ng-container *ngTemplateOutlet="navLink; context: { $implicit: item }" />
              }
            </ul>
          </div>
        </hlm-sidebar-group>
      </hlm-sidebar-content>

      @if (showUpgrade()) {
        <div class="px-3 py-4">
          <div class="flex flex-col gap-7.5 rounded-[12px] border border-border bg-card p-2.5">
            <div class="flex items-center justify-between">
              <span class="material-symbols-outlined p-1 text-[24px] [--fill:1]">workspace_premium</span>
              <button
                type="button"
                aria-label="Dismiss"
                (click)="dismissUpgrade()"
                class="grid place-items-center rounded-[8px] border border-border p-1"
              >
                <span class="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>
            <div>
              <p class="text-sm leading-normal font-medium">Upgrade to Pro.</p>
              <p class="mt-4 text-[11px] leading-normal">
                Unlock more features and manage your finances better.
              </p>
            </div>
            <button
              type="button"
              class="rounded-[12px] bg-slate-800 px-4 py-3 text-sm leading-normal font-medium text-white"
            >
              Upgrade Now
            </button>
          </div>
        </div>
      }

      <hlm-sidebar-footer class="border-t border-sidebar-border px-2 py-4">
        <ul hlmSidebarMenu>
          <ng-container *ngTemplateOutlet="navLink; context: { $implicit: settingsItem }" />
        </ul>
      </hlm-sidebar-footer>
    </hlm-sidebar>

    <!-- One template for every menu row, so the long class string exists once -->
    <ng-template #navLink let-item>
      <li hlmSidebarMenuItem>
        <a
          hlmSidebarMenuButton
          size="lg"
          closeMobileSidebarOnClick
          [routerLink]="item.link"
          routerLinkActive
          #rla="routerLinkActive"
          [isActive]="rla.isActive"
          class="h-12 gap-5 rounded-[12px] px-4 text-sm leading-normal font-medium data-active:bg-primary data-active:text-primary-foreground data-active:hover:bg-primary data-active:hover:text-primary-foreground"
        >
          <span class="material-symbols-outlined text-[24px]" [style.--fill]="rla.isActive ? 1 : 0">
            {{ item.icon }}
          </span>
          <span>{{ item.label }}</span>
        </a>
      </li>
    </ng-template>
  `,
})
export class AppSidebar {
  protected readonly navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { label: 'Transactions', icon: 'receipt_long', link: '/transactions' },
    { label: 'Categories', icon: 'category', link: '/categories' },
    { label: 'Reports', icon: 'donut_small', link: '/reports' },
    { label: 'Accounts', icon: 'account_balance', link: '/accounts' },
  ];

  protected readonly settingsItem: NavItem = { label: 'Settings', icon: 'settings', link: '/settings' };

  protected readonly showUpgrade = signal(true);

  protected dismissUpgrade(): void {
    this.showUpgrade.set(false);
  }
}
