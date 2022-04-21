import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from '../infobase/careers.json'

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  isVacancyDetailsVisible: boolean;

  careers: any = (data as any).default;

  constructor(private httplient: HttpClient) { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.isVacancyDetailsVisible = !this.isVacancyDetailsVisible;
  }
}
