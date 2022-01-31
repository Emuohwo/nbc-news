import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import {NzMenuModule} from 'ng-zorro-antd/menu'

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SidebarComponent,
    FooterComponent,
    HeroComponent,
    BreakingNewsComponent,
    CarouselComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NzCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
