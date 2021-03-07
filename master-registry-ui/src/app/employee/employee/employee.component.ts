import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/service/employee.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  closeResult: string;
  editForm: FormGroup;
  employeeToDeleteId: number;

  constructor(    
    private employeeService: EmployeeService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder    
    ) { }

  ngOnInit(): void {
    this.getAllEmployees(); 
    
    this.editForm = this.formBuilder.group({
      id: [''],
      lastName: [''],
      firstName: [''],
      email: [''],
      department: [''],
      country: [''],
      totalLeaveDays: [''],
      leaveDaysLeft: ['']
    } );
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

  openAddEmployeeModal(addEmployeeModal) {
    this.modalService.open(addEmployeeModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  onSubmit(addEmployeeForm: NgForm) {    
    this.employeeService.addEmployee(addEmployeeForm.value).subscribe(
      (result) => {
        this.ngOnInit(); //Reload the table
      }
    );
    this.modalService.dismissAll() //Dismiss the modal
  }

  openEmployeeDetailsModal(employeeDetailsModal, employee: Employee) {
    this.modalService.open(employeeDetailsModal, {
     centered: true,
     backdrop: 'static',
     size: 'lg'
   });
    document.getElementById('dtlastName').setAttribute('value', employee.lastName);
    document.getElementById('dtfirstName').setAttribute('value', employee.firstName);
    document.getElementById('dtemail').setAttribute('value', employee.email);
    document.getElementById('dtdepartment').setAttribute('value', employee.department);
    document.getElementById('dtcountry').setAttribute('value', employee.country);
  }

  openEditEmployeeDetailsModal(editEmployeeDetailsModal, employee: Employee) {
    this.modalService.open(editEmployeeDetailsModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      id: employee.id, 
      lastName: employee.lastName,
      firstName: employee.firstName,
      email: employee.email,
      department: employee.department,
      country: employee.country,
      totalLeaveDays: employee.totalLeaveDays,
      leaveDaysLeft: employee.leaveDaysLeft
    });
  }

  onSave() {
    this.employeeService.updateEmployee(this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  openDeleteEmployeeModal(deleteEmployeeModal, employee: Employee) {
    this.employeeToDeleteId = employee.id;
    this.modalService.open(deleteEmployeeModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {  
    this.employeeService.deleteEmployee(this.employeeToDeleteId)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
}
