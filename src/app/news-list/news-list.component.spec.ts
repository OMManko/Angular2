import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { NewsItemComponent } from '../news-item/news-item.component';
import { NewsFilterPipe } from '../news-filter.pipe';
import { NewsDataService } from '../news-data.service';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from '@angular/router/testing';
import { ApiNewsDataService } from "../api-news-data.service";


describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let input: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewsListComponent,
        NewsItemComponent,
        NewsFilterPipe,
      ],
      providers: [
        NewsDataService,
        ApiNewsDataService
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

  it('should render news with search word', async(() => {
    let search = 'something';
    component.filterNews(search);
    expect(component.searchText).toEqual(search);
  }));

  it('should render all local news', async(() => {
    component.getLocalNews();
    expect(component.sourceName).toEqual('This is my local news');
    expect(component.isLocalNews).toBeTruthy();
  }));

  it('should update local news list on add/remove', async(() => {
    component.updateNews(event);
    expect(component.getLocalNews());
  }));

  it('should display news list from news API with requested source', async(() => {
    let source = 'BBC';
    component.showSelectedSourceNews(source);
  }));

});
