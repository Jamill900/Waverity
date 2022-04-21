import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  news: News;

  constructor(
    private database: NewsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getNewsById();
  }

  getNewsById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.database.getNewsById(id).subscribe(news => this.news = news);
  }

  

}
