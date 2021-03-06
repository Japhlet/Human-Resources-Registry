import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee/employee.component';
import { HomeComponent } from './home/home/home.component';
import { AppuserslistComponent } from './userregistration/appuserslist/appuserslist.component';
import { UserregistrationComponent } from './userregistration/userregistration/userregistration.component';

const routes: Routes = [
  { path: '', redirectTo: 'usersregistration', pathMatch: 'full' },
  { path: 'usersregistration', component: UserregistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeComponent }, 
    
  { path: 'userslist', component: AppuserslistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
