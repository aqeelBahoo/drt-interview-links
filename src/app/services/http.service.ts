import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar

  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      // this.snackBar.open(error.error.message, "ERROR", {
      //   duration: 2000,
      // });
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      // this.snackBar.open(error.error, "ERROR", {
      //   duration: 2000,
      // });
    }
    // return an observable with a user-facing error message
    // this.snackBar.open("Something bad happened; please try again later.", "SERVER ERROR", {
    //   duration: 2000,
    // });
    return throwError(
      'Something bad happened; please try again later.');
  };


  public getCourseList(): Observable<any> {
    return this.http.get<any>("http://localhost:4243/courses")
      .pipe(
        catchError(this.handleError)
      );
  }
}
