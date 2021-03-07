package com.example.masterregistry.service;

import com.example.masterregistry.entity.Employee;
import com.example.masterregistry.exceptions.EmployeeNotFoundException;
import com.example.masterregistry.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmailValidator emailValidator;

    public List<Employee> getAllEmployees() {
        return  this.employeeRepository.findAll();
    }

    public void addEmployee(Employee employee) {
        boolean isValidEmail = emailValidator.test(employee.getEmail());

        if(!isValidEmail) {
            throw new IllegalStateException("Email not valid");
        }

        this.employeeRepository.save(employee);
    }

    public void updateEmployee(Employee employee) {
        Employee employeeToUpdate = employeeRepository.findById(employee.getId())
                .orElseThrow(() -> new EmployeeNotFoundException("Employee with id "+employee.getId()+" not found"));


        boolean isValidEmail = emailValidator.test(employee.getEmail());

        if(!isValidEmail) {
            throw new IllegalStateException("Email not valid");
        }

        employeeToUpdate.setLastName(employee.getLastName());
        employeeToUpdate.setFirstName(employee.getFirstName());
        employeeToUpdate.setEmail(employee.getEmail());
        employeeToUpdate.setDepartment(employee.getDepartment());
        employeeToUpdate.setCountry(employee.getCountry());
        employeeToUpdate.setTotalLeaveDays(employee.getTotalLeaveDays());
        employeeToUpdate.setLeaveDaysLeft(employee.getLeaveDaysLeft());

        this.employeeRepository.save(employeeToUpdate);
    }

    public void deleteEmployee(Long id) {
        Employee employeeToDelete = this.employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee with id "+id+" not found"));
        this.employeeRepository.delete(employeeToDelete);
    }
}
