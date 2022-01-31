import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Article, ArticleResponse } from './models/article';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // live key
  // apiKey: string = 'b8a10b05597b47158c48b06695fab7db'
  // fake key
  apiKey: string = 'fakekey'

  private articlesUrl:string = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-29&sortBy=publishedAt&apiKey='


  constructor(private http:HttpClient) { }

  
  // Fetch articles
  getArticles(): Observable<ArticleResponse> {
    return this.http.get<ArticleResponse>(`${this.articlesUrl}${this.apiKey}`)
  }
}
