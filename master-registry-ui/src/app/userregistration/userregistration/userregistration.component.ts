import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppUser } from 'src/app/model/userregistration.model';
import { UserregistrationService } from 'src/app/userregistration.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  appUsers: AppUser[];
  closeResult: string;

  constructor(
    private userRegistrationService: UserregistrationService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllAppUsers();
  }

  public getAllAppUsers(): void {    
    this.userRegistrationService.getAllAppUsers().subscribe(
      (response: AppUser[]) => {        
        this.appUsers = response;
      },
      (error: HttpErrorResponse) => {        
        alert(error.message);
      }
    );
  }

  openRegisterAppUserModal(registerAppUserModal) {
    this.modalService.open(registerAppUserModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  onSubmit(registerAppUserForm: NgForm) {    
    this.userRegistrationService.registerAppUser(registerAppUserForm.value).subscribe(
      (result) => {
        this.ngOnInit(); //Reload the table
      }
    );
    this.modalService.dismissAll() //Dismiss the modal
  }  

}
