import { Component, OnInit} from '@angular/core';
import {NewsService} from '../../Login/services/news.api.service'
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
   
  private articles : any;

  constructor(public newsService : NewsService) { }

  ngOnInit(): void {
    this.FetchHeadlines();
  }
  
  FetchHeadlines()
  {
     this.newsService.GetAllGaurdian()
        .subscribe((result) =>
        {
          this.articles = result;
                  this.articles.response.results.forEach((element: { [x: number]: { trailText: string; }; }) => {
                       this.newsService.newsArticles.push(this.newsService.CusotomMapper(element));
          });
        }) 
  }
}
