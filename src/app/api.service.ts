import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const localUrl = 'assets/data/users.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(localUrl);
  }
}
