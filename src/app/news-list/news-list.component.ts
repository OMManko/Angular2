import {Component, OnInit, Output, EventEmitter, Input, ViewChild, NgModule} from '@angular/core';
import {NewsDataService} from '../news-data.service';
import {ApiNewsDataService} from '../api-news-data.service';
import {forEach} from "../../../node_modules/@angular/router/src/utils/collection";
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

@NgModule({
  imports: [
    HttpClient,
    RouterTestingModule
  ]
})

export class NewsListComponent implements OnInit {

  articles: any[] = [ ];

  newsSources: any[] = [ ];

  searchText: string;

  public source = 'google-news';

  public sourceName = 'Google News';

  public isLocalNews = false;

  constructor(private apiNewsService: ApiNewsDataService, private newsDataService: NewsDataService) {}


  @Input() newsListData: any;

  @Output() notify = new EventEmitter <any>();

  ngOnInit() {

    this.apiNewsService.getSources()
      .subscribe(
        (newsSources: any) => {
          this.newsSources = newsSources;
        },
        (error) => console.log(error)
      );

    this.apiNewsService.getNewsBySource(this.source)
      .subscribe(
        (articles: any) => {
          this.articles = articles;
        },
        (error) => console.log(error)
      );
  }


  showSelectedSourceNews(source) {
    this.apiNewsService.getNewsBySource(source)
      .subscribe(
        (articles: any) => {
          this.articles = articles;
          this.sourceName = articles[0].source.name;
          this.source = articles[0].source.id;
        },
        (error) => console.log(error)
      );

  }

  filterNews(searchText: string) {
    this.searchText = searchText;
  }

  public getLocalNews() {
    this.sourceName = 'This is my local news';
    this.isLocalNews = true;
    this.newsDataService.get();
    this.articles = this.newsDataService.get();
  }

  showLocalNews() {
    if ((event.target as HTMLInputElement).checked) {
      this.getLocalNews();
    } else {
      this.isLocalNews = false;
      this.apiNewsService.getNewsBySource(this.source)
        .subscribe(
          (articles: any) => {
            this.articles = articles;
            this.sourceName = articles[0].source.name;
          },
          (error) => console.log(error)
        );
    }
  }

  updateNews(event: object) {
    this.getLocalNews();
  }

}

