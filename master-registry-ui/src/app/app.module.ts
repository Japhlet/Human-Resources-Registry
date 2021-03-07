import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserregistrationComponent } from './userregistration/userregistration/userregistration.component';
import { AppuserslistComponent } from './userregistration/appuserslist/appuserslist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    UserregistrationComponent,    
    AppuserslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
