import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../market/products/products.component';


@Component({
  selector: 'app-navigation-search',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './navigation-search.component.html',
  styleUrl: './navigation-search.component.css'
})
export class NavigationSearchComponent {
  searchResults: Product[] = [];

  requestProducts(name: string){
    console.log(`Searching products with name: ${name}`);
  }

}
