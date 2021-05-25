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
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ImpfFormComponent } from './impf-form/impf-form.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import {JwtInterceptorService} from "./shared/jwt-interceptor.service";

@NgModule({
  declarations: [ AppComponent, ImpfListeComponent, ImpfListeItemComponent, ImpfDetailsComponent, HomeComponent, ImpfFormComponent, LoginComponent ],
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],
  providers:    [ ImpfContainerService, AuthenticationService,
      {
      // Bei jedem Http-Request möchten wir unseren Interceptor feuern
      // Wann soll er triggern: Immer wenn ein Http-Request läuft.
      provide: HTTP_INTERCEPTORS,
      // Welche Klasse soll aufgerufen werden, wenn unser Interceptor gefeuert wird
      useClass: TokenInterceptorService,
      // Man möchte den in unterschiedlichen Files verwenden
      multi: true
  }, {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptorService,
          multi: true
  }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
