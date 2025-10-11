import { Injectable } from '@angular/core';

export interface Category {
  name: string;
  link: string;
  subcategories?: Category[];
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {
  readonly categories: Category[] = [
    { name: 'Все категории', link: '/all' },
    { name: 'Телефоны и гаджеты', link: '/phones', subcategories: [] },
    { name: 'Бытовая техника', link: '/appliances', subcategories: [] },
    { name: 'ТВ, Аудио, Видео', link: '/tv-audio-video', subcategories: [] },
    { name: 'Компьютеры', link: '/computers', subcategories: [] },
    { name: 'Мебель', link: '/furniture', subcategories: [] },
    { name: 'Красота, здоровье', link: '/beauty-health', subcategories: [] },
    { name: 'Детские товары', link: '/kids', subcategories: [] },
    { name: 'Аптека', link: '/pharmacy', subcategories: [] },
  ];
  constructor() { }
  getCategories() {
    return this.categories;
  }
}
