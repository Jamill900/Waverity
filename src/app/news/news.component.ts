import { News } from './../news';
import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  title: any;
  p: number = 1;
  filterTerm!: string;
  searchText: any;

  loading = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() :void {
    this.getNews();
  }

  getNews(){
    this.loading = true;
    this.newsService.getNews().subscribe( news => {
        this.news = news.reverse();
      })
  }

  onPageChange(page: number) {
    this.p = page;
    window.scroll(0, 0)
  }

}
