import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';;
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConnexionService} from '../../services/connexion-service';

@Component({
  selector: 'app-inscriptions',
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './inscriptions.html',
  styleUrl: './inscriptions.css'
})
export class Inscriptions {
  public email="";
  public password="";
  public passwordconfirmation="";
  public pseudo ="";
  public codepostal="";
  public ville = "";
  public phone = "";

  constructor(private http: HttpClient, private ConnexionService:ConnexionService) {}

  Inscriptions(){
    const data ={
      email:this.email,
      password:this.password,
      passwordConfirm:this.passwordconfirmation,
      pseudo:this.pseudo,
      cityCode:this.codepostal,
      city:this.ville,
      phone:this.phone,
    }

    if (this.password === this.password) {
      this.ConnexionService.InscriptionUser(data).subscribe({
        next: (data) => {
          if (data.code === "200") {
            window.open(`http://localhost:4200/connexion`, "_self");
          } else {
            alert(data.message);
          }

        }
      })
    }
    else{
      alert("Le mot de passe de confirmation ne correspond pas au mot de passe")
    }
  }


}
