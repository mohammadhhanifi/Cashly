import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matKeyboardArrowDownFillOutline } from '@ng-icons/material-symbols/outline';
@Component({
  imports: [
    HlmButtonImports,
    NgIcon,

  ],
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
  providers: [
    provideIcons({
      matKeyboardArrowDownFillOutline
    }),
  ],

})
export class PageHeader { }
