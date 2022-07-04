import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './hero/hero.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RatingsComponent } from './ratings/ratings.component';
import { MyOpinionComponent } from './my-opinion/my-opinion.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { BlogComponent } from './blog/blog.component';
import { NumbersComponent } from './numbers/numbers.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, NavComponent, HeroComponent, QualitiesComponent, AboutMeComponent, RatingsComponent, MyOpinionComponent, PortfolioComponent, NewsletterComponent, BlogComponent, NumbersComponent, FooterComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
