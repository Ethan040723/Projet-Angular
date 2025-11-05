import { Component } from '@angular/core';
import {ListeArticleService} from '../../services/liste-article-service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-liste-article',
  imports: [HttpClientModule],
  templateUrl: './liste-article.html',
  styleUrl: './liste-article.css'
})
export class ListeArticle {
 public Article : any [] = []
  constructor(private ArticleService : ListeArticleService,private http: HttpClient) {
  }

  ngOnInit() {
    this.ArticleService.getArticles().subscribe({
      next: data => {
        if (data.code == "200") {

          this.Article = data.data;
        }
      }
    })
  }


  Redirection(id:number ) {
    window.open(`http://localhost:4200/articles/${id}`, "_self");
  }
  Redirection_2( ) {
    window.open(`http://localhost:4200/ajout-article`, "_self");
  }
  Redirection_3( ) {
    window.open(`http://localhost:4200/modifier-article`, "_self");
  }
}
