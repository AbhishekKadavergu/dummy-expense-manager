import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginURL = environment.apiURL + '/users/login'
  registrationURL = environment.apiURL + '/users'

  constructor(private http: HttpClient) { }

  login(cred:any): Observable<any> {

    return this.http.post<any>(this.loginURL, cred)
  }

  register(cred:any): Observable<any> {
    return this.http.post<any>(this.registrationURL, cred)
  }

  getAuthToken():any {
    return localStorage.getItem('token') 
    }
}
