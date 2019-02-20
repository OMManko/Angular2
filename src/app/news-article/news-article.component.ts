import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsDataService} from "../news-data.service";

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  public newsId: string;

  constructor(private route: ActivatedRoute, private news: NewsDataService) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.params['id']
  }

}
