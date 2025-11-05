import { Routes } from '@angular/router';
import {ListeArticle} from './articles/pages/liste-article/liste-article';
import {Article} from './articles/pages/article/article';
import {AjoutArticle} from './articles/pages/ajout-article/ajout-article';
import {ModifierArticle} from './articles/pages/modifier-article/modifier-article';
import {Connexion} from './auth/pages/connexion/connexion';
import {Inscriptions} from './auth/pages/inscriptions/inscriptions';
import {MotdepasseOublie} from './auth/pages/motdepasse-oublie/motdepasse-oublie';
import {Homepage} from './home/pages/homepage/homepage';


export const routes: Routes = [
  { path: '' , component: Homepage },
  { path: 'listes-articles' , component: ListeArticle },
  { path: 'articles/:id' , component: Article },
  { path: 'ajout-article' , component: AjoutArticle },
  { path: 'modifier-article' , component: ModifierArticle },
  { path: 'connexion' , component: Connexion },
  { path: 'inscription' , component: Inscriptions },
  { path: 'mdp-oublie' , component: MotdepasseOublie },
];
