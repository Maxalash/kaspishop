import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Category {
  name: string;
  link: string;
  subcategories?: Category[];
}
const categories: Category[] = [
  { name: 'Электроника', link: '/electronics', subcategories: [
      { name: 'Смартфоны', link: '/electronics/smartphones' },
      { name: 'Ноутбуки', link: '/electronics/laptops' },
    ]
  },
  { name: 'Одежда', link: '/clothing', subcategories: [
      { name: 'Мужская одежда', link: '/clothing/mens' },
      { name: 'Женская одежда', link: '/clothing/womens' },
    ]
  }
];
@Component({
  selector: 'app-navigation-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-categories.component.html',
  styleUrl: './navigation-categories.component.css'
})
export class NavigationCategoriesComponent {
  @Input() categories: Category[] = categories;

}
