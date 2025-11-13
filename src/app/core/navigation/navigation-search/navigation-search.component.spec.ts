import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSearchComponent } from './navigation-search.component';
import { provideRouter } from '@angular/router';

describe('NavigationSearchComponent', () => {
  let component: NavigationSearchComponent;
  let fixture: ComponentFixture<NavigationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationSearchComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavigationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
