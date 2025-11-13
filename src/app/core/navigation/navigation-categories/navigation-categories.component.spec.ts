import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCategoriesComponent } from './navigation-categories.component';
import { provideRouter } from '@angular/router';

describe('NavigationCategoriesComponent', () => {
  let component: NavigationCategoriesComponent;
  let fixture: ComponentFixture<NavigationCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationCategoriesComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
