import { Injectable } from '@angular/core';
import { Vaccination} from "./vaccination";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Injectable()
export class ImpfContainerService {

  private api = 'https://impfservice.s1810456012.student.kwmhgb.at/api';

  constructor(private http: HttpClient) { }

  getAll() : Observable<Array<Vaccination>> {
    return this.http.get(`${this.api}/impfungen`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle (id: string) : Observable<Vaccination> {
    return this.http.get(`${this.api}/impfungen/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

   remove(id: number) : Observable<any> {
    return this.http.delete(`${this.api}/impfungen/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create (vaccination: Vaccination) : Observable<any> {
    return this.http.post(`${this.api}/impfungen`, vaccination)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update (vaccination: Vaccination) : Observable<any> {
    return this.http.put(`${this.api}/impfungen/${vaccination.id}`, vaccination)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }

  check (id: string) : Observable<Boolean> {
    return this.http.get<Boolean>(`${this.api}/impfungen/checkid/${id}`)
        .pipe(retry(3)).pipe(catchError(this.errorHandler));

  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }


}
