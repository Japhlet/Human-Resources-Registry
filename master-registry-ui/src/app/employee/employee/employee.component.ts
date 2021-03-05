import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  closeResult: string;

  constructor(    
    private employeeService: EmployeeService,
    private modalService: NgbModal   
    ) { }

  ngOnInit(): void {
    this.getAllEmployees();    
  }
  
  public getAllEmployees(): void {    
    this.employeeService.getAllEmployees().subscribe(
      (response: Employee[]) => {        
        this.employees = response;
      },
      (error: HttpErrorResponse) => {        
        alert(error.message);
      }
    );
  }

  open(addEmployee) {
    this.modalService.open(addEmployee, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any) : string {
    if(reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }

  onSubmit(f: NgForm) {    
    this.employeeService.addEmployee(f.value).subscribe(
      (result) => {
        this.ngOnInit(); //Reload the table
      }
    );
    this.modalService.dismissAll() //Dismiss the modal
  }
}
