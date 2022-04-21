import { Component, OnInit, ViewChild } from '@angular/core';
import { Rss } from '../rss';
import { SolutionsService } from '../solutions.service';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {

  rss: Rss[] = [];
  loading = false;
  active = 1;

  selectedProduct: Rss;
  @ViewChild('tabset', { static: true }) tabset: any;

  constructor(private solutions: SolutionsService) { }

  ngOnInit(): void {
    this.getRssProducts();
    this.tabset.tabs[0].active = true;
  }

  onSelect(product: Rss): void {
    this.selectedProduct = product;
  }

  getRssProducts() {
    this.loading = true;
    this.solutions.getRssSolutions().subscribe(rss => {
      this.rss = rss;
    })
  }

}
