import { Component, Input } from '@angular/core';
import { NavigationSearchComponent } from './navigation-search/navigation-search.component';
import { NavigationCategoriesComponent } from './navigation-categories/navigation-categories.component';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NavigationSearchComponent, NavigationCategoriesComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
}
