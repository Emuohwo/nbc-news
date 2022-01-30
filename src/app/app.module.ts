import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { BreakingNewsComponent } from './breaking-news/breaking-news.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    SidebarComponent,
    FooterComponent,
    HeroComponent,
    BreakingNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
