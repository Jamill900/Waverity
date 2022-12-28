import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from '../infobase/careers.json'
import { Router } from '@angular/router';
import { Career } from '../careers';
import { SolutionsService } from '../solutions.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  isVacancyDetailsVisible: boolean;

  careers: Career[] = [];
  loading = false;

  constructor(private httplient: HttpClient, private router: Router, private careerDB: SolutionsService) { }

  ngOnInit(): void {
    this.getCareers();
  }

  navigateTo(url: string) {
    window.open(url, '_blank');
  }

  getCareers() {
    this.loading = true;
    this.careerDB.getCareers().subscribe(careers => 
      this.careers = careers);
  }

  toggleModal() {
    this.isVacancyDetailsVisible = !this.isVacancyDetailsVisible;
  }
}
