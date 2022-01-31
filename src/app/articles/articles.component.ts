import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../models/article';
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  // response is look like the apiResponse
  // Api-Key need upgrade
  // const  apiResponse = {
  //   statusText: 'ok',
  //   articles: [{}, {}]
  // }

  constructor( private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(articles => {
        this.articles =  articles
      })
      
  }

  articles: Article[] = ARTICLES;
  //  articles:Article[] = [];


}
