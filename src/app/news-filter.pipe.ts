import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(articles: any, searchText: string, filters: string[]): any[] {
    if (!articles) { return []; }
    if (!searchText) { return articles; }

    searchText = searchText.toLowerCase();

    return articles.filter(article => article.title.toLowerCase().includes(searchText));
  }
}
