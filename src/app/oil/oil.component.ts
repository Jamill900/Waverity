import { Custom } from './../custom';
import { Rss } from './../rss';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Oil } from '../oil';
import { SolutionsService } from '../solutions.service';


@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {

  oil: Oil[] = [];
  rss: Rss[] = [];
  custom: Custom[] = [];
  loading = false;
  active = 1;

  @ViewChild('tabset', { static: true }) tabset: any;

  constructor(private solutions: SolutionsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOilProducts();
  }

  getOilProducts() {
    this.loading = true;
    this.solutions.getOilSolutions().subscribe(oil => {
      this.oil = oil;
    })
  }

}
