import { Component } from '@angular/core';
import { Sidebar } from '../shared/layout/sidebar/sidebar';

@Component({
  imports: [Sidebar],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories {}
