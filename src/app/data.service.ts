import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers: HttpHeaders;
  accessPointUrl = 'http://localhost:60673/api/Workouts';
    URL2 = 'https://jsonplaceholder.typicode.com/users';
    URL3 = 'https://api.openbrewerydb.org/breweries';
    URL4 = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
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
}
