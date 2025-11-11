import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../market/products/products.component';


@Component({
  selector: 'app-navigation-search',
  standalone: true,
  imports: [MatIcon, FormsModule],
  templateUrl: './navigation-search.component.html',
  styleUrl: './navigation-search.component.css'
})
export class NavigationSearchComponent {
  searchResults: Product[] = [];

  productName: string = '';

  requestProducts(){
    console.log(`Searching products with name: ${this.productName}`);
  }

}
