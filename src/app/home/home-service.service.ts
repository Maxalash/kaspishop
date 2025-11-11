import { Injectable } from '@angular/core';
import { CategoryCard } from './category-card/category-card.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  categories: CategoryCard[] = [
    { title: 'Electronics', imageUrl: 'assets/category1.jpeg' },
    { title: 'Fashion', imageUrl: 'assets/fashion.jpg' },
    { title: 'Home & Garden', imageUrl: 'assets/home_garden.jpg' },
    { title: 'Sports', imageUrl: 'assets/sports.jpg' },
    { title: 'Toys', imageUrl: 'assets/toys.jpg' },
    { title: 'Automotive', imageUrl: 'assets/automotive.jpg' },
    { title: 'Books', imageUrl: 'assets/books.jpg' },
    { title: 'Health & Beauty', imageUrl: 'assets/health_beauty.jpg' },
    { title: 'Groceries', imageUrl: 'assets/groceries.jpg' },
    { title: 'Music', imageUrl: 'assets/music.jpg' },
    { title: 'Movies & TV Shows', imageUrl: 'assets/movies_tv.jpg' },
    { title: 'Video Games', imageUrl: 'assets/video_games.jpg' },
    { title: 'Pet Supplies', imageUrl: 'assets/pet_supplies.jpg' },
    { title: 'Office Supplies', imageUrl: 'assets/office_supplies.jpg' },
    { title: 'Travel', imageUrl: 'assets/travel.jpg' },
  ];

  constructor() { }

  getCategories(): CategoryCard[] {
    return this.categories;
  }

  getCategoryByTitle(title: string): CategoryCard | undefined {
    return this.categories.find(category => category.title === title);
  }
}
