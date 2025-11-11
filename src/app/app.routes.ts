import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'c/:category',
    component: MarketComponent,
    title: 'Market'
  },
  {
    path: 'd/:productId',
    component: DetailsComponent,
    title: 'Product Details'
  }
];
