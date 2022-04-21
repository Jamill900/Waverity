import { CustomComponent } from './custom/custom.component';
import { RssComponent } from './rss/rss.component';
import { OilComponent } from './oil/oil.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { CareersComponent } from './careers/careers.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'oil', component: OilComponent },
  { path: 'rss', component: RssComponent },
  { path: 'custom', component: CustomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
