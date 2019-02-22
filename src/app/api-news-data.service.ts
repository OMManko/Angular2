import {Injectable, NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [
    HttpClient
  ]
})

export class ApiNewsDataService {
  key = '0672e1602aad4dc9aa61e122190937d7';
  constructor(private http: HttpClient) { }

  getNewsBySource(source) {
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.key)
      .pipe(
        map((response: any) => {
          return response.articles;
        })
      );
  }

  getSources() {
    return this.http.get('https://newsapi.org/v2/sources?apiKey=' + this.key)
      .pipe(
        map((response: any) => {
          return response.sources;
        })
      );
  }

}
