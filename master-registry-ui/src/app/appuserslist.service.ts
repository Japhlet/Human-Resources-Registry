import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from './model/userregistration.model';

@Injectable({
  providedIn: 'root'
})
export class AppuserslistService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAllAppUsers(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.apiServerUrl}/users/all`);
  } 
  
}
