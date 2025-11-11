import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryCard } from './category-card/category-card.interface';
import {MatButtonModule} from '@angular/material/button';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent, CommonModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  categories: CategoryCard[] = [];
  homeService: HomeServiceService = inject(HomeServiceService);

  constructor() {
    this.categories = this.homeService.getCategories();
  }
  
}
