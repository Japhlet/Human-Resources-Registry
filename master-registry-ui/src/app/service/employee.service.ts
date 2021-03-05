import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
    ) { } 
    
    public getAllEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(`${this.apiServerUrl}/employees/all`);
  }

  public addEmployee(employee : Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employees/add`, employee);
  }
}
