import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Article } from './models/article';
import { Observable } from 'rxjs';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-type': 'application/json',
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesUrl:string = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-29&sortBy=publishedAt&apiKey=b8a10b05597b47158c48b06695fab7db'


  constructor(private http:HttpClient) { }

  
  // Fetch articles
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl)
  }
}
