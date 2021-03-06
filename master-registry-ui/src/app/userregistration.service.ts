import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from './model/userregistration.model';

@Injectable({
  providedIn: 'root'
})
export class UserregistrationService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }
  
  public registerAppUser(appUser : AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(`${this.apiServerUrl}/users/register`, appUser);
  }

  public getAppUserByEmail(email: string): Observable<AppUser> {
    return this.http.get<AppUser>(`${this.apiServerUrl}/users/getAppUserByEmail/${email}`);
  }

  public getAllAppUsers(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.apiServerUrl}/users/all`);
  }

  public loginUsers(email: string, password: String) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(
        email +":"+password
      )
    })

    return this.http.get(`${this.apiServerUrl}`, {headers, responseType: 'text' as 'json'});
  }

  public loginUser(appUser: AppUser): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}`, appUser);
  }
}
