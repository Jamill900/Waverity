import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Custom } from './custom';
import { Oil } from './oil';
import { Rss } from './rss';
import { Career } from './careers';

@Injectable({
  providedIn: 'root'
})
export class SolutionsService {

  constructor(private http: HttpClient) { }

  private oilUrl = 'api/oil';
  private rssUrl = 'api/rss';
  private customUrl = 'api/custom';
  private careersUrl = 'api/careers';

  getCareers(): Observable<Career[]> {
    return this.http.get<Career[]>(this.careersUrl);
  }

  getOilSolutions(): Observable<Oil[]> {
    return this.http.get<Oil[]>(this.oilUrl);
  }

  getOilSolution(id: number): Observable<Oil> {
    const url = `${this.oilUrl}/${id}`;
    return this.http.get<Oil>(url);
  }

  getRssSolutions(): Observable<Rss[]> {
    return this.http.get<Rss[]>(this.rssUrl);
  }

  getRssSolution(id: number): Observable<Rss> {
    const url = `${this.rssUrl}/${id}`;
    return this.http.get<Rss>(url);
  }

  getCustomSolutions(): Observable<Custom[]> {
    return this.http.get<Custom[]>(this.customUrl);
  }

  getCustomSolution(id: number): Observable<Custom> {
    const url = `${this.customUrl}/${id}`;
    return this.http.get<Custom>(url);
  }

}