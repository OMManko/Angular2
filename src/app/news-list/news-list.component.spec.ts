import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { NewsItemComponent } from '../news-item/news-item.component';
import { NewsFilterPipe } from '../news-filter.pipe';
import { NewsDataService } from '../news-data.service';
import {AppComponent} from "../app.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { RouterTestingModule } from '@angular/router/testing';
import {of} from "rxjs";



describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewsListComponent,
        NewsItemComponent,
        NewsFilterPipe,
      ],
      providers: [
        NewsDataService
      ],
      imports: [
        RouterModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
