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

  leaveDaysChart = [];
  totalLeaveDays = [];
  leaveDaysLeft = [];
  lastName = [];
  age = [];
  salary = [];
  salaryChart = [];
  ageChart = [];

  constructor(
    private employeeService: EmployeeService,
    private userRegistrationService: UserregistrationService
  ) { }

  ngOnInit(): void {
    this.employeeCharts();
  }

  employeeCharts() {
    this.employeeService.employeesData().subscribe(
      (emp: Employee[]) => {

        for (let data of emp) {
          this.totalLeaveDays.push(data.totalLeaveDays);
          this.leaveDaysLeft.push(data.leaveDaysLeft);
          this.lastName.push(data.lastName);
          this.salary.push(data.salary);
          this.age.push(data.age);

          if (this.totalLeaveDays != null || this.leaveDaysLeft != null || this.lastName != null) {

            this.leaveDaysChart = new Chart('leaveDays', {
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
                  }
                ]
              },
              options: {
                legend: {
                  display: true
                },
                title: {
                  display: true,
                  text: 'Employee Leave Days Chart'
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
                      display: true,
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
        }

        if(this.salary != null || this.lastName != null) {

          this.salaryChart = new Chart('salary', {
            type: 'bar',
            data: {
              labels: this.lastName,
              datasets: [
                {
                  label: 'Salary',
                  data: this.salary,
                  borderColor: '#524c4c',
                  fill: false
                }
              ]
            },
            options: {
              legend: {
                display: true
              },
              title: {
                display: true,
                text: 'Employee Salary Chart'
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
                    display: true,
                    scaleLabel: {
                      display: true
                    }
                  }
                ]
              }
            }
          })

        }

        if(this.age != null || this.lastName != null) {

          this.ageChart = new Chart('age', {
            type: 'line',
            data: {
              labels: this.lastName,
              datasets: [
                {
                  label: 'Age',
                  data: this.age,
                  borderColor: '#3cba9f',
                  fill: false
                }
              ]
            },
            options: {
              legend: {
                display: true
              },
              title: {
                display: true,
                text: 'Employee Age Chart'
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
                    display: true,
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
