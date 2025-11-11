import { Component } from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-market',
  standalone: true,
  imports: [FilterComponent, ProductsComponent],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css'
})
export class MarketComponent {

}
