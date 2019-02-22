import { TestBed } from '@angular/core/testing';

import { ApiNewsDataService } from './api-news-data.service';
import { HttpClientModule} from '@angular/common/http';
import {async} from "../../node_modules/@angular/core/testing";
import {NgModule} from "@angular/core";


describe('ApiNewsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  it('should be created', () => {
    const service: ApiNewsDataService = TestBed.get(ApiNewsDataService);
    expect(service).toBeTruthy();
  });
});
