import { Component } from '@angular/core';
import {Vaccination} from "./shared/vaccination";
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'is-root',
  templateUrl: './app.component.html'
        /*`
      <is-impf-liste *ngIf="listOn" (showDetailsEvent)="showDetails($event)"></is-impf-liste>
      <is-impf-details *ngIf="detailsOn" [impfung]="impfung" (showListEvent)="showListe()"></is-impf-details>
      ` */,
  styleUrls: []
})
export class AppComponent  {

  constructor(private authService: AuthenticationService){}

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  getLoginLabel(){
    if(this.isLoggedIn()){
      return "Logout";
    }else {
      return "Login";
    }
  }
/*
  listOn = true;
  detailsOn = false;

  vaccination: Vaccination;

  showListe(){
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(vaccination:Vaccination){
    this.vaccination = vaccination;
    this.listOn = false;
    this.detailsOn = true;
  } */
}
