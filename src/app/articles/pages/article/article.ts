import { Component } from '@angular/core';
import {ListeArticleService} from '../../services/liste-article-service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  imports: [HttpClientModule],
  templateUrl: './article.html',
  styleUrl: './article.css'
})
export class Article {

  public Article : any [] = []
  public id!: string;
  public ArticlePage : any

  constructor(private route: ActivatedRoute,
              private ArticleService : ListeArticleService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;




    this.ArticleService.getArticles().subscribe({
      // data ici est le JSON TOUT EN ENTIER
      next: data => {
        // Si le code métier dans le json de l'api est valide
        if (data.code == "200") {
          // Mettre à jour les films
          // Pourquoi data.data car :
          // - data tout le json
          // - dans ce json nous avaons (code, message, data : la liste des films)
          this.Article = data.data;
          this.ArticlePage = this.Article.find(article => article.id === this.id);
        }
      }
    })
  }
  Redirection( ) {
    window.open(`http://localhost:4200/listes-articles`, "_self");
  }


}
