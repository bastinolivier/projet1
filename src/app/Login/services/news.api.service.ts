import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsModel } from 'src/app/_models/news.model';



@Injectable({ providedIn: 'root' })
export class NewsService {

    public  newsArticles : NewsModel[] = [];
    public temp:NewsModel = new NewsModel;
    private api_key = 'b511cb92-ace9-44f5-8c4b-833d804c7232';
    private gaurUrl = "http://content.guardianapis.com/search?show-fields=all&page-size=20&api-key=";
    private gaurSectionUrl = "https://content.guardianapis.com/search?show-fields=all&page-size=20&q="
   

constructor(private http: HttpClient) {}

GetAllGaurdian()
  {
    return this.http.get(this.gaurUrl + this.api_key);
  }
  GetGaurdianSearchResult(section:string)
  {
    return this.http.get(this.gaurSectionUrl + section + "&api-key=" + this.api_key );
  }
  
  public CusotomMapper(item: { [x: number]: { trailText:string; }; }) : NewsModel{
          
    this.temp = new NewsModel;
      this.temp.thumbnail = item["fields"].thumbnail;
      this.temp.sectionId= item["sectionId"];
      this.temp.webPublicationDate = item["webPublicationDate"];
      this.temp.webTitle = item["webTitle"];
      this.temp.webUrl = item["webUrl"];
      this.temp.trailText = item["fields"].trailText;
      return this.temp;
  }  
 
}