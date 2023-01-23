import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { NewsService } from '../news.service';
import { NgwWowService } from 'ngx-wow'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: News[] = [];
  title: any;
  p: number = 1;

  loading = false;
  
  isVideoOpened: boolean = false;

  constructor(private newsService: NewsService,
    private wowService: NgwWowService, private modalService: NgbModal) {
     }

  ngOnInit() :void {
    this.getNews();
    this.wowService.init();
    
  }

  openVideo() {
    this.isVideoOpened = !this.isVideoOpened;
    console.log(this.isVideoOpened)
  }


  getNews(){
    this.loading = true;
    this.newsService.getNews().subscribe( news => {
        this.news = news.reverse();
      })
  }

  scrollToElement(element: any): void{
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  openLg(content: any) {
    this.modalService.open(content, {size: 'lg' });
  }

}
