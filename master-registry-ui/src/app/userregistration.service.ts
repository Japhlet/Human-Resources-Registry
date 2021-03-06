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
}
