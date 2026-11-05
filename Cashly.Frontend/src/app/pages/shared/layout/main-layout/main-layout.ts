import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  AppSidebar } from '../sidebar/sidebar';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  imports: [RouterOutlet, HlmSidebarImports, AppSidebar],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
