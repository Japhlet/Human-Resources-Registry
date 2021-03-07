import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';
import { map } from 'rxjs/operators';

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

  public updateEmployee(employee : Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/employees/update`, employee);
  }

  public deleteEmployee(employeeId : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employees/delete/${employeeId}`);
  }

  employeesData (): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employees/all`).pipe(
      map((result) => {
        return result;
      })
      );
  }
}




