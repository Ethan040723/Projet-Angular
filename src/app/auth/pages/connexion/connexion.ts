import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConnexionService} from '../../services/connexion-service';


@Component({
  selector: 'app-connexion',
  imports: [HttpClientModule,
    FormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css'
})
export class Connexion {
  public email = "";
  public password = "";
  constructor(private http: HttpClient, private router: Router,private ConnexionService: ConnexionService) {}

  Connexion(){
    const envoye = this.email
    this.ConnexionService.ConnexionUser(this.email, this.password).subscribe({
      next: data => {
        if (data.code === "200") {
          this.ConnexionService.PartageDonne(envoye)
          window.open(`http://localhost:4200/listes-articles`, "_self");

        }
        else {
          alert(data.message);
        }}})


  }
  Redirection(){
    this.router.navigate([`/mdp-oublie`]);
  }

}
