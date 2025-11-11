import { Injectable } from '@angular/core';
import { CategoryCard } from './category-card/category-card.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  categories: CategoryCard[] = [
    { title: 'Electronics', imageUrl: 'assets/electronics.jpg', link: '/assets/category1.jpeg' },
    { title: 'Fashion', imageUrl: 'assets/fashion.jpg', link: '/categories/fashion' },
    { title: 'Home & Garden', imageUrl: 'assets/home_garden.jpg', link: '/categories/home-garden' },
    { title: 'Sports', imageUrl: 'assets/sports.jpg', link: '/categories/sports' },
    { title: 'Toys', imageUrl: 'assets/toys.jpg', link: '/categories/toys' },
    { title: 'Automotive', imageUrl: 'assets/automotive.jpg', link: '/categories/automotive' },
    { title: 'Books', imageUrl: 'assets/books.jpg', link: '/categories/books' },
    { title: 'Health & Beauty', imageUrl: 'assets/health_beauty.jpg', link: '/categories/health-beauty' },
    { title: 'Groceries', imageUrl: 'assets/groceries.jpg', link: '/categories/groceries' },
    { title: 'Music', imageUrl: 'assets/music.jpg', link: '/categories/music' },
    { title: 'Movies & TV Shows', imageUrl: 'assets/movies_tv.jpg', link: '/categories/movies-tv' },
    { title: 'Video Games', imageUrl: 'assets/video_games.jpg', link: '/categories/video-games' },
    { title: 'Pet Supplies', imageUrl: 'assets/pet_supplies.jpg', link: '/categories/pet-supplies' },
    { title: 'Office Supplies', imageUrl: 'assets/office_supplies.jpg', link: '/categories/office-supplies' },
    { title: 'Travel', imageUrl: 'assets/travel.jpg', link: '/categories/travel' },
  ];

  constructor() { }

  getCategories(): CategoryCard[] {
    return this.categories;
  }

  getCategoryByTitle(title: string): CategoryCard | undefined {
    return this.categories.find(category => category.title === title);
  }
}
