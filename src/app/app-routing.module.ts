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
import { OilDetailsComponent } from './oil-details/oil-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'solutions/oil-and-gas/:id', component: OilComponent },
  { path: 'solutions/oil-and-gas', component: OilComponent },
  { path: 'solutions/remote-sensing-systems/:id', component: RssComponent },
  { path: 'solutions/custom-solutions/:id', component: CustomComponent },
  { path: 'solutions/oil-and-gas-solution/:id', component: OilDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
