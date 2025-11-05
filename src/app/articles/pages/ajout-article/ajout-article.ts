import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {AjouteArticleService} from '../../services/ajoute-article-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ajout-article',
  imports: [HttpClientModule,
    FormsModule
  ],
  templateUrl: './ajout-article.html',
  styleUrl: './ajout-article.css'
})
export class AjoutArticle {
  constructor(private AjouteArticleService : AjouteArticleService,private http: HttpClient) {
  }
  public title ="";
  public desc ="";
  public author ="";
  public img ="";

  SendArticle(){
    const data = {
      "title": this.title,
      "desc": this.desc,
      "author": this.author,
      "imgPath": this.img,
    }

    this.AjouteArticleService.ajouterArticle(data).subscribe({
    next: () =>{

      alert("article ajouter")}

    })
  }
  Redirection( ) {
    window.open(`http://localhost:4200/listes-articles`, "_self");
  }

}
