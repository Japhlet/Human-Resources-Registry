import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
    ) { }

    baseUrl:string = 'http://localhost:8080/employees';

    public getAllEmployees() : Observable<ApiResponse>{
      return this.http.get<ApiResponse>(this.baseUrl);
    } 
}
