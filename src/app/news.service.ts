import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  private newsUrl= 'api/news';

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }

  getNewsById(id: number): Observable<News> {
    const url = `${this.newsUrl}/${id}`;
    return this.http.get<News>(url);
  }

  searchNews(term: string): Observable<News[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<News[]>(`${this.newsUrl}/name=${term}`)
  }
}
