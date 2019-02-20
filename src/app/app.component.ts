import { Component } from '@angular/core';
import {NewsDataService} from "./news-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-angular-app';
  constructor(private news: NewsDataService) {}
}

