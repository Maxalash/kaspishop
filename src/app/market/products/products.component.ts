import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', price: 29.99, imageUrl: 'assets/category1.jpeg' },
    { id: 2, name: 'Product 2', price: 49.99, imageUrl: 'assets/category1.jpeg' },
    { id: 3, name: 'Product 3', price: 19.99, imageUrl: 'assets/category1.jpeg' },
    { id: 4, name: 'Product 4', price: 99.99, imageUrl: 'assets/category1.jpeg' }
  ];

}
