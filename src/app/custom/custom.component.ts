import { ActivatedRoute } from '@angular/router';
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
  active : number;

  @ViewChild('tabset', { static: true }) tabset: any;

  constructor(private solutions: SolutionsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.active = Number(this.route.snapshot.paramMap.get('id'));
    this.getCustomProducts();
  }
  
  getCustomProducts() {
    this.loading = true;
    this.solutions.getCustomSolutions().subscribe(custom => {
      this.custom = custom;
    })
  }

}
