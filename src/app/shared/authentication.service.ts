import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

interface Token {
  exp: number;
  user: {
    id: string;
    role: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api:string = 'https://impfservice.s1810456012.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient) { }

  // Methode übergibt E-Mail und Passwort an unseren Server/API
    // POST weil wir im Body email und pw übergeben müssen
  login (email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

   /*
   Container: decodedToke.
   In diesen Container dekodieren wir den Token
   und wir bekommen ein JSON zurück
   */
  public setLocalStorage (token: string) {
    console.log("storing token");
    console.log(jwt_decode(token));

    const decodedToken = jwt_decode(token) as Token;
    console.log(decodedToken.user.id);
    console.log(decodedToken.user.role);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", decodedToken.user.id);
    sessionStorage.setItem("role", decodedToken.user.role);
  }

  public getCurrentUserId() {
    return Number.parseInt(sessionStorage.getItem("userId"));
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("role");
    console.log("logged out");
  }

  /*
  Wir greifen auf den Session Storage zu
  und schauen nach ob er nich gültig ist.
   */
  public isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token: string = sessionStorage.getItem("token");
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log("token expired");
        sessionStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false;
    }

  }

  /*
  Das selbe wie isLoggedIn()
  Ich erstelle mir einen Container admincheck
  wo ich mir die User-Rolle hineinspeichere.
  Anschließend überprüfe ich, ob admincheck == 'admin' ist.
   */
  public isAdminLoggedIn(){
      if (sessionStorage.getItem("token")) {
          let token: string = sessionStorage.getItem("token");
          const decodedToken = jwt_decode(token) as Token;
          let admincheck = decodedToken.user.role;
          let expirationDate: Date = new Date(0);
          expirationDate.setUTCSeconds(decodedToken.exp);
          if (expirationDate < new Date()) {
              console.log("token expired");
              sessionStorage.removeItem("token");
              return false;
          }
          if (admincheck == 'admin'){
              return true;
          }

      } else {
          return false;
      }
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

}
