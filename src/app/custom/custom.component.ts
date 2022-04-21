import { Component, OnInit, ViewChild } from '@angular/core';
import { Custom } from '../custom';
import { SolutionsService } from '../solutions.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  custom: Custom[] = [];
  loading = false;
  active = 1;

  @ViewChild('tabset', { static: true }) tabset: any;

  constructor(private solutions: SolutionsService) { }

  ngOnInit(): void {
    this.getCustomProducts();
    this.tabset.tabs[0].active = true;
  }
  
  getCustomProducts() {
    this.loading = true;
    this.solutions.getCustomSolutions().subscribe(custom => {
      this.custom = custom;
    })
  }

}
