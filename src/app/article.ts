export class Article {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  url: string;
  urlToImage: string;
  description: string;
  content: string;

  constructor( values: Object = {} ) {
    Object.assign( this, values );
  }
}
