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
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() categories: Category[] = categories;
}
