import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HomeComponent } from './home/home/home.component';
import { AppuserslistComponent } from './userregistration/appuserslist/appuserslist.component';
import { UserregistrationComponent } from './userregistration/userregistration/userregistration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: '', component: HomeComponent },
  { path: 'usersregistration', component: UserregistrationComponent },  
  { path: 'login', component: UserregistrationComponent },  
  { path: 'userslist', component: AppuserslistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
