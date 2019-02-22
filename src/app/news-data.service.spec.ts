import { TestBed } from '@angular/core/testing';
import { NewsDataService } from './news-data.service';
import {of} from "rxjs";

describe('NewsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [NewsDataService]
  }));

  it('should be created', () => {
    const service: NewsDataService = TestBed.get(NewsDataService);
    expect(service).toBeTruthy();
  });

});
