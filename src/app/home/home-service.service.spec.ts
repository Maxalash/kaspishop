import { TestBed } from '@angular/core/testing';

import { HomeServiceService } from './home-service.service';

describe('HomeServiceService', () => {
  let service: HomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get categories', () => {
    const categories = service.getCategories();
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should ger category by title', () => {
    const category = service.getCategoryByTitle('Electronics');
    expect(category).toBeDefined();
  });
});
