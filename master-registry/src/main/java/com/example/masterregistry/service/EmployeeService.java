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

    public List<Employee> getAllEmployees() {
        return  this.employeeRepository.findAll();
    }

    public void addEmployee(Employee employee) {
        this.employeeRepository.save(employee);
    }

    public void updateEmployee(Long id, Employee employee) {
        Employee employeeToUpdate = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee with id "+id+" not found"));

        employeeToUpdate.setLastName(employee.getLastName());
        employeeToUpdate.setFirstName(employee.getFirstName());
        employeeToUpdate.setEmail(employee.getEmail());
        employeeToUpdate.setDepartment(employee.getDepartment());
        employeeToUpdate.setCountry(employee.getCountry());

        employeeRepository.save(employeeToUpdate);
    }
}
