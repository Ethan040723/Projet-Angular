import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AjouteArticleService {

  constructor(private http: HttpClient) {
  }

  ajouterArticle(data: any): Observable<any> {
    return this.http.post("http://localhost:3000/articles/save", data);
  }

  supprimerArticle(id:number): Observable<any> {
    return this.http.delete(`http://localhost:3000/articles/${id}`);
  }




}
