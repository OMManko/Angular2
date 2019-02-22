import {async, inject, TestBed} from '@angular/core/testing';
import { NewsDataService } from './news-data.service';
import {of} from "rxjs";

describe('NewsDataService', () => {

  let component: NewsDataService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [NewsDataService]
  }));

  beforeEach(() => {
    component = new NewsDataService();
  });

  it('should be created', () => {
    const service: NewsDataService = TestBed.get(NewsDataService);
    expect(service).toBeTruthy();
  });

  it('should render 4 news items', async(() => {
    component.get();
    expect(component.newsListData.length).toEqual(4);
  }));

  it('should render more items when new one is added', () => {
    let prevLength = component.newsListData.length;
    const newsItem =  {
      "id": 123,
      "title": "Some title",
      "author": "Volha Manko",
      "publishedAt": "2019-02-01",
      "url": "https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d",
      "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/04/103991614-GettyImages-476344868.1910x1000.jpg",
      "description": "Unit test task",
      "content": "Just a few days after its withdrawal, Cboe has resubmitted the VanEck/SolidX Bitcoin ETF proposal for approval by the Securities and Exchange Commission. The latest possible deadline for approval is now likely sometime in early October. \r\nNo Time Wasted\r\nGabo… [+1872 chars]"
    };
    component.add(newsItem);
    expect(component.newsListData.length).toBeGreaterThan(prevLength);
  });

  it('should render less items when one is deleted', async(() => {
    let prevLength = component.newsListData.length;
    component.delete(0);
    expect(component.newsListData.length).toBeLessThan(prevLength);
  }));

});

