import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ImpfListeComponent } from './impf-liste/impf-liste.component';
import { ImpfListeItemComponent } from './impf-liste-item/impf-liste-item.component';
import { ImpfDetailsComponent } from './impf-details/impf-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from "./app-routing.module";
import { ImpfContainerService} from "./shared/impf-container.service";
import { HttpClientModule} from "@angular/common/http";
import { ImpfFormComponent } from './impf-form/impf-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService} from "./shared/authentication.service";

@NgModule({
  declarations: [ AppComponent, ImpfListeComponent, ImpfListeItemComponent, ImpfDetailsComponent, HomeComponent, ImpfFormComponent, LoginComponent ],
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  providers:    [ ImpfContainerService, AuthenticationService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
