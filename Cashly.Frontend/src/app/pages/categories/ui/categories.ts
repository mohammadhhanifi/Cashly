import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../services/category-service';

@Component({
  imports: [],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories implements OnInit {
  service = inject(CategoryService);

  ngOnInit(): void {
    this.service.list();
  }
}
