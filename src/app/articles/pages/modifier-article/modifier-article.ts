import { Component } from '@angular/core';
import {ListeArticleService} from '../../services/liste-article-service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {AjouteArticleService} from '../../services/ajoute-article-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modifier-article',
  imports: [HttpClientModule,
    FormsModule
  ],
  templateUrl: './modifier-article.html',
  styleUrl: './modifier-article.css'
})
export class ModifierArticle {

  public id: string = "";
  public title: string = "";
  public desc: string = "";
  public author : string = "";
  public imgPath: string = "";

  public selectArticle: any = {}
  public Article : any [] = []
  constructor(private ArticleService : ListeArticleService,
              private AjouteArticleService:AjouteArticleService,private http: HttpClient) {
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
  modifierArticle(article: any) {
    this.selectArticle = article;
  };

  sendModifierArticle(){
    const articleData = {
      id: this.selectArticle.id,
      title: this.selectArticle.title,
      desc: this.selectArticle.desc,
      author: this.selectArticle.author,
      imgPath: this.selectArticle.imgPath,
    }

    if(this.title !== '') {
      articleData.title = this.title;
    };
    if(this.desc !== '') {
      articleData.desc = this.desc;
    };
    if(this.imgPath !== '') {
      articleData.imgPath = this.imgPath;
    };
    if(this.imgPath !== '') {
      articleData.imgPath = this.imgPath;
    };

    this.AjouteArticleService.ajouterArticle(articleData).subscribe({
      next: () => {
        alert("Tu as bien ajouter l'article");
      }
    });
  }
  Redirection( ) {
    window.open(`http://localhost:4200/listes-articles`, "_self");
  }
  SupprArticle(){
    this.AjouteArticleService.supprimerArticle(this.selectArticle.id).subscribe({
      next: () => {
        alert("article supprimer");
      }
    })
  }
}
