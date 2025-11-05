import { Component, signal } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');

  constructor(private router: Router){}



  RedirectionConnexion() {

    this.router.navigate([`/connexion`]);
  }
  RedirectionInscription() {

    window.open(`http://localhost:4200/inscription`, "_self");
  }
}
