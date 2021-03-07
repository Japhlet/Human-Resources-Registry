import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppUser } from 'src/app/model/userregistration.model';
import { UserregistrationService } from 'src/app/userregistration.service';

@Component({
  selector: 'app-appuserslist',
  templateUrl: './appuserslist.component.html',
  styleUrls: ['./appuserslist.component.css']
})
export class AppuserslistComponent implements OnInit {

  appUsers: AppUser[];
  closeResult: string;
  userCreatedSuccessfulMessage = '';
  userCreatedNotSuccessfulMessage = '';
  editForm: FormGroup;
  appUserToDeleteId: number;

  constructor(
    private userRegistrationService: UserregistrationService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllAppUsers();

    this.editForm = this.formBuilder.group({
      id: [''],
      lastName: [''],
      firstName: [''],
      email: [''],
      password: ['']
    });
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
    this.modalService.open(registerAppUserModal, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return 'with: ${reason}';
    }
  }

  onSubmit(registerAppUserForm: NgForm) {
    this.userRegistrationService.registerAppUser(registerAppUserForm.value).subscribe(
      data => {
        this.ngOnInit(); //Reload the table
        this.userCreatedSuccessfulMessage = "User added successfully.";
      },
      error => {
        console.log("An exception occurred");
        this.userCreatedNotSuccessfulMessage = "Bad credentials, please enter valid email and password";
      }
    );
    this.modalService.dismissAll() //Dismiss the modal
  }

  openAppUserDetailsModal(appUserDetailsModal, appUser: AppUser) {
    this.modalService.open(appUserDetailsModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('dtlastName').setAttribute('value', appUser.lastName);
    document.getElementById('dtfirstName').setAttribute('value', appUser.firstName);
    document.getElementById('dtemail').setAttribute('value', appUser.email);
  }

  openEditAppUserDetailsModal(editAppUserDetailsModal, appUser: AppUser) {
    this.modalService.open(editAppUserDetailsModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id: appUser.id,
      lastName: appUser.lastName,
      firstName: appUser.firstName,
      email: appUser.email,
      password: appUser.password
    });
  }

  onSave() {
    this.userRegistrationService.updateAppUser(this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  openDeleteAppUserModal(deleteAppUserModal, appUser: AppUser) {
    this.appUserToDeleteId = appUser.id;
    this.modalService.open(deleteAppUserModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    this.userRegistrationService.deleteAppUser(this.appUserToDeleteId)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

}


