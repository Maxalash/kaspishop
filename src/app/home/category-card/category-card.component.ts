import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryCard } from './category-card.interface';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  @Input() category!: CategoryCard;

}
