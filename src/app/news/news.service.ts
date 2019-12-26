import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'https://newsapi.org/v2/top-headlines'
  country='in'
  apiKey='5c636a468a90465aa7cab199265d7299'
  
  constructor(private http:HttpClient) {
    
  }

  latestNewsFromService(){
    let newsurl = `${this.url}?country=${this.country}&apiKey=${this.apiKey}`;
    return this.http.get(newsurl);
  }
}
