import { TestBed } from '@angular/core/testing';

import { ApiNewsDataService } from './api-news-data.service';

describe('ApiNewsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiNewsDataService = TestBed.get(ApiNewsDataService);
    expect(service).toBeTruthy();
  });
});
