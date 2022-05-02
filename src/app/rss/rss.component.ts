import { ActivatedRoute } from '@angular/router';
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
  active : number;

  selectedProduct: Rss;
  @ViewChild('tabset', { static: true }) tabset: any;

  constructor(private solutions: SolutionsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.active = Number(this.route.snapshot.paramMap.get('id'));
    this.getRssProducts();
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
