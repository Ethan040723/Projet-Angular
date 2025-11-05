import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [
    NgStyle
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  image="https://imgs.search.brave.com/tCEnI-brGDLrXVvZZpLDowEV61mo4EjO08jTr4A4S6g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vbmF0aGFheC9u/YXRoYWF4MjMwNC9u/YXRoYWF4MjMwNDAw/MTQ1LzIwMjIyMjgz/Mi1wb3J0cmFpdC1k/LXVuLWdyb3VwZS1k/ZS1jaGllbnMtZGUt/cmFjZS1taXh0ZS0l/QzMlQTAtbGEtY2Ft/cGFnbmUuanBnP3Zl/cj02"
  imagesize="cover"

  Redirection( ) {
    window.open(`http://localhost:4200/listes-articles`, "_self");
  }
}
