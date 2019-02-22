import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})

export class NewsDataService {

  newsListData: any[] = [
    {
      "id": 0,
      "title": "Deutsche Bank earnings: issues 2018 net income comes in at 341 million euros, vs. loss of 735 million euros in 2017 - CNBC",
      "author": "Jason Kwong",
      "publishedAt": "2019-02-01",
      "url": "https://medium.freecodecamp.com/you-might-not-need-react-router-38673620f3d",
      "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/04/103991614-GettyImages-476344868.1910x1000.jpg",
      "description": "Deutsche Bank posted its first full-year net profit since 2014 on Friday, with CEO Christian Sewing saying it",
      "content": "Just a few days after its withdrawal, Cboe has resubmitted the VanEck/SolidX Bitcoin ETF proposal for approval by the Securities and Exchange Commission. The latest possible deadline for approval is now likely sometime in early October. \r\nNo Time Wasted\r\nGabo… [+1872 chars]"
    },
    {
      'id': 1,
      'title': 'In addition to Facebook’s, Apple restores Google’s iOS app certificate - Ars Technica',
      'author': 'Christine Kim',
      'publishedAt': '2019-01-31',
      'url': 'https://arstechnica.com/information-technology/2019/02/in-addition-to-facebooks-apple-restores-googles-ios-app-certificate/',
      'urlToImage': "https://cdn.arstechnica.net/wp-content/uploads/2018/10/GettyImages-1047740344-760x380.jpg",
      "description": "6 with 6 posters participating On Thursday evening, Apple restored Googles access to an confirm our internal corporate apps have been restored",
      "content": "Bitcoin mining is a confirmation of the blockchain network transactions. It is a secure method of the transaction between two users in which no government, bank or central authority participates. Bitcoin nodes are used to verify blockchain transactions and el… [+1972 chars]"
    },
    {
      "id": 2,
      "title": "New York Knicks president says Kristaps Porzingis' lack of buy-in contributed to trade - ESPN",
      "author": "Jason Kwong",
      "publishedAt": "2019-01-30",
      "url": "https://arstechnica.com/information-technology/2019/02/in-addition-to-facebooks-apple-restores-googles-ios-app-certificate/",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0201%2Fr296880_2_1296x729_16%2D9.jpg",
      "description": "New York Knicks president Steve Mills said Kristaps Porzingis hadn't.",
      "content": "Crypto markets in selloff this Friday, XRP dumping recent gains, Tron and Stellar falling, NEM collapsing. As expected crypto markets are starting to fall back again as we end the week. Strong down trend lines cannot be broken and the majority of crypto asse… [+2186 chars]"

    },
    {
      "id": 3,
      "title": "Jussie Smollett's family issues statement on attack",
      "author": "Martin Young",
      "publishedAt": "2019-01-31",
      "url": "https://arstechnica.com/information-technology/2019/02/in-addition-to-facebooks-apple-restores-googles-ios-app-certificate/",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--Nz39jFw0--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/iw5rtjdtuk6nicrkhsf0.jpg",
      "description": "The family of Jussie Smollettthe Empire actor who was hospitalized this week after being subjected to a violent",
      "content": "A crypto company claims it is offering the fastest Bitcoin transfer in the world after adding a brand-new service to its crypto wallet. SovereignWallet says its platform offers banking-grade features to protect user assets, all the while ensuring that comple… [+3819 chars]"
    }
  ];

  model: any = {};

  public newArticle;


  get() {
    return this.newsListData;
  }

  add(article: Article) {
    article.id = this.newsListData.length;
    this.newsListData.push(new Article(article));
    console.log(this.newsListData);
    return this.newsListData;
  }

  delete(id: number): NewsDataService {
      this.newsListData = this.newsListData.filter( article => article.id !== id );
      return this;
  }

  constructor() { }

}

