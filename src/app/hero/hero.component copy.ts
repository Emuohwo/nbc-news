import { Component, OnInit } from '@angular/core';
import { ARTICLES, ARTICLERESP } from '../mock-articles';
// import { Article } from '../models/article';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  // article: Article = ARTICLES[0]
  article = ARTICLERESP.articles[0]

  constructor() { }

  ngOnInit(): void {
  }

}
