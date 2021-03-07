import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { UserregistrationService } from 'src/app/userregistration.service';
import { Chart } from 'chart.js';
import { identifierModuleUrl } from '@angular/compiler';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chart = [];
  totalLeaveDays = [];
  leaveDaysLeft = [];
  lastName = [];

  constructor(
    private employeeService: EmployeeService,
    private userRegistrationService: UserregistrationService
  ) { }

  ngOnInit(): void {

    this.employeeLeaveDays ();


    //this.employeeService.dailyEmployeesAdded().subscribe(
      //(res) => {
        //console.log(res);   
        
        //let tototalLeaveDays = res[0];
        //let leaveDaysLeft = res[1]; 
        //let department = res[2];  
        
        //console.log(tototalLeaveDays);
        //console.log(leaveDaysLeft);
        //console.log(department);

      

     // }
    //)
  }


  employeeLeaveDays () {
    this.employeeService.dailyEmployeesAdded().subscribe(
      (emp: Employee[]) => { 

        for (let data of emp) { 
          this.totalLeaveDays.push(data.totalLeaveDays);
          this.leaveDaysLeft.push(data.leaveDaysLeft);
          this.lastName.push(data.lastName);

          this.chart = new Chart('canvas', {
              type: 'line',              
              data: {
                labels: this.lastName,
                datasets: [
                  {
                    label: 'Total Leave Days',
                    data: this.totalLeaveDays,
                    borderColor: '#3cba9f',
                    fill: false
                  },
                  {
                    label: 'Leave Days Left',
                    data: this.leaveDaysLeft,
                    borderColor: '#ffcc00',
                    fill: false
                  },
                ]
              },
              options: {                
                legend: {
                  display: true
                },
                scales: {
                  xAxis: [
                    {
                      display: true,
                      scaleLabel: {
                        display: true                        
                      }                      
                    }
                  ],
                  yAxis: [
                    {                      
                      display:true,                      
                      beginAtZero: true,
                      scaleLabel: {
                        display: true
                      }
                    }
                  ]
                }            
              }
            })
         
         }
      
    });
}

}
