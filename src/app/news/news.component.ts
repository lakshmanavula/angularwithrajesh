import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { NewsItem } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:NewsItem[];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.latestNews();
  }

  latestNews(){
      this.newsService.latestNewsFromService().subscribe(data=>{
          this.news = data['articles'];
         
      },
      error=>{
          console.log("Faild to make call ",error)
      }
      
      )
  }

}
