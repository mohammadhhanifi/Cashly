import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  imports: [HlmButtonImports],
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
})
export class PageHeader {}
