import { HttpClient } from '@angular/common/http';
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

  public loginUser(appUser: AppUser): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}`, appUser);
  }

  public updateAppUser(appUser : AppUser): Observable<AppUser> {
    return this.http.put<AppUser>(`${this.apiServerUrl}/users/update`, appUser);
  }

  public deleteAppUser(appUserId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/users/delete/${appUserId}`);
  }
}
