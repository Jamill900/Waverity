import { Component, OnInit } from '@angular/core';
import { Oil } from '../oil';
import { SolutionsService } from '../solutions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oil-details',
  templateUrl: './oil-details.component.html',
  styleUrls: ['./oil-details.component.css']
})
export class OilDetailsComponent implements OnInit {

  oil: Oil;
  loading = false;

  constructor(private solutions: SolutionsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getOilProducts();
  }

  getOilProducts() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.solutions.getOilSolution(id).subscribe(oil => this.oil = oil)
  }
}
