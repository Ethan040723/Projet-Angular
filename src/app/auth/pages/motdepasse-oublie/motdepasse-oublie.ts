import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConnexionService} from '../../services/connexion-service';

@Component({
  selector: 'app-motdepasse-oublie',
  imports: [FormsModule,
  HttpClientModule,],
  templateUrl: './motdepasse-oublie.html',
  styleUrl: './motdepasse-oublie.css'
})
export class MotdepasseOublie {
  public email="";
  public data=""

  constructor(private http: HttpClient,
              private router: Router,
              private ConnexionService: ConnexionService) {}

  MotdepasseOublie() {
    return this.ConnexionService.MdpOublie(this.email).subscribe({
      next: (data) => {
        if (data.code === "200") {
          this.data= data.data
          alert(data.message);

        }
        else {
          alert("email incorrect");
        }

      }
    })
  }
}
