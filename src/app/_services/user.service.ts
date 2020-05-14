import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Global } from '../Global/Global';
import { User } from '../Models/user';
import { throwError, Observable } from 'rxjs';
import { IPeople } from '../Models/people';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders;
  // constructor(private http: HttpClient) { }
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  getAll() {
    return this.http.get<User[]>(`${Global.apiUrl}users`);
}


  // get all people data
  getAllPeople(url: string): Observable<IPeople[]> {
    return this.http.get<IPeople[]>(url, {headers: this.headers})
      .pipe();
  }

  // insert new people details
  addPeople(url: string, people: IPeople): Observable<any> {
    return this.http.post(url, JSON.stringify(people), {headers: this.headers})
      .pipe();
  }

  // update people details
  updatePeople(url: string, id: number, people: IPeople): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, people, {headers: this.headers})
      .pipe();
  }

  // delete people information
  deletePeople(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/people?id=42
    return this.http.delete(newurl, {headers: this.headers})
      .pipe();
  }

  // custom handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
