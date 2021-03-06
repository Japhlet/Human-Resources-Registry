import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  email: string;
  password: string;

  constructor(
    private userRegistrationService: UserregistrationService,
    private modalService: NgbModal,
    private router: Router  
  ) { }

  ngOnInit(): void {    
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
  
  openLoginAppUserModal(loginAppUserModal) {
    this.modalService.open(loginAppUserModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  loginUser(loginAppUserForm: NgForm) {
    this.userRegistrationService.loginUser(loginAppUserForm.value).subscribe(
      data => console.log(data)     
    );
 
    //this.router.navigate(['/home']);
    //this.modalService.dismissAll();
   } 
}
