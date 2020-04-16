import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IContact } from './Models/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers: HttpHeaders;
  accessPointUrl = 'http://localhost:60673/api/Workouts'; // api/PaymentDetails
    URL2 = 'https://jsonplaceholder.typicode.com/users';
    URL3 = 'https://api.openbrewerydb.org/breweries';
    URL4 = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  // -----------sampleApiRequests-----------------------------------------------------------------//


  getUsers() {
    return this.http.get(this.URL2);
  }
  getUser(userId) {
    // return this.http.get(this.URL2 + '/' + userId);
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }
  getPosts() {
    return this.http.get(this.URL4);
  }

// ---------------------Jogging------------------------------------------------------------//

  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload, {headers: this.headers});
  }

// ---------------------Contact-------------------------------------------------------------//

  // get all contact data
  getAllContact(url: string): Observable<IContact[]> {
    return this.http.get<IContact[]>(url)
      .pipe();
  }

  // insert new contact details
  addContact(url: string, contact: IContact): Observable<any> {
    return this.http.post(url, JSON.stringify(contact), {headers: this.headers})
      .pipe();
  }

  // update contact details
  updateContact(url: string, id: number, contact: IContact): Observable<any> {
    const newurl = `${url}?id=${id}`;
    return this.http.put(newurl, contact, {headers: this.headers})
      .pipe();
  }

  // delete contact information
  deleteContact(url: string, id: number): Observable<any> {
    const newurl = `${url}?id=${id}`; // DELETE api/contact?id=42
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
