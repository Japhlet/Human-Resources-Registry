import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService    
    ) { }

  ngOnInit(): void {
    this.getAllEmployees();
    //console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
  }
  
  public getAllEmployees(): void {
    //console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    this.employeeService.getAllEmployees().subscribe(
      (response: Employee[]) => {
        //console.log("ggggggggggggggggggggggggggggggggggggggggggggggggggg");
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        //console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx", error.message)
        alert(error.message);
      }
    );
  }
}
