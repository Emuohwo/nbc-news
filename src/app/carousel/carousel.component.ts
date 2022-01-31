import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../mock-articles';
import { Article } from '../models/article';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // array = [1, 2, 3, 4];
  effect = 'scrollx';

  articles: Article[] = ARTICLES

  constructor() { }

  ngOnInit(): void {
  }

}
