import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-home',
  template: `
      <br>
      <div class="ui center aligned container">
        <h1>Herzlich Willkommen</h1>
        <p>Schön, dass du dich impfen lassen möchtest. <br> Du kannst dich hier zu Impfungen informieren und anmelden!</p>
        <a routerLink="../impfungen" class="ui grey button">Nächsten Impftermine</a>
      </div>
    
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
