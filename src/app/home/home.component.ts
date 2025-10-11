import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryCard } from './category-card/category-card.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: CategoryCard[] = [
    { title: 'Electronics', imageUrl: 'assets/electronics.jpg', link: '/categories/electronics' },
    { title: 'Fashion', imageUrl: 'assets/fashion.jpg', link: '/categories/fashion' },
    { title: 'Home & Garden', imageUrl: 'assets/home_garden.jpg', link: '/categories/home-garden' },
    { title: 'Sports', imageUrl: 'assets/sports.jpg', link: '/categories/sports' },
    { title: 'Toys', imageUrl: 'assets/toys.jpg', link: '/categories/toys' },
  ];
}
