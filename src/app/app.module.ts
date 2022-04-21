import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgwWowModule } from 'ngx-wow';
import { TechnologyComponent } from './technology/technology.component';
import { OilComponent } from './oil/oil.component';
import { RssComponent } from './rss/rss.component';
import { CustomComponent } from './custom/custom.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TabsModule } from 'ngx-tabset';
import { NgxImageComparisonSliderModule } from 'ngx-image-comparison-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailsComponent,
    AboutComponent,
    CareersComponent,
    TechnologyComponent,
    OilComponent,
    RssComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgbModule,
    NgwWowModule,
    Ng2SearchPipeModule,
    ScrollToModule,
    SlickCarouselModule,
    TabsModule.forRoot(),
    NgxImageComparisonSliderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
