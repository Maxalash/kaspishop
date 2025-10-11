import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './categories-service.service';
import { CategoriesServiceService } from './categories-service.service';

@Component({
  selector: 'app-navigation-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-categories.component.html',
  styleUrl: './navigation-categories.component.css'
})
export class NavigationCategoriesComponent {
  categories: Category[];
  constructor() {
    this.categories = inject(CategoriesServiceService).getCategories();
  }

}
