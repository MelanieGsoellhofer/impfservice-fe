import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImpfDetailsComponent} from "./impf-details/impf-details.component";
import { ImpfListeComponent} from "./impf-liste/impf-liste.component";
import { HomeComponent} from "./home/home.component";
import { ImpfFormComponent} from "./impf-form/impf-form.component";
import { LoginComponent} from "./login/login.component";
import {CanNavigateToAdminGuard} from "./can-navigate-to-admin.guard";


const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'impfungen', component: ImpfListeComponent },
    { path: 'impfungen/:id', component: ImpfDetailsComponent },
    { path: 'admin', component: ImpfFormComponent, canActivate:[CanNavigateToAdminGuard]},
    { path: 'admin/:id', component: ImpfFormComponent},
    { path: 'login', component: LoginComponent}

];


@NgModule ({
    // Hier wird das RouterModule importiert.
    // Mit forRoot() wird ein neues Moduel mit den Routing erzeugt.
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [CanNavigateToAdminGuard]
})

export class AppRoutingModule { }
