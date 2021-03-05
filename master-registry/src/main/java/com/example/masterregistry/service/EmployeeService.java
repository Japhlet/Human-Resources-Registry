package com.example.masterregistry.service;

import com.example.masterregistry.entity.Employee;
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
}
