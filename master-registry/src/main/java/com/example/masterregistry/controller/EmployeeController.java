package com.example.masterregistry.controller;

import com.example.masterregistry.entity.Employee;
import com.example.masterregistry.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(path = "/employees")
    public List<Employee> getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }

    @PostMapping(path = "employees/add")
    public void addEmployee(@RequestBody Employee employee){
        this.employeeService.addEmployee(employee);
    }

    @PutMapping(path = "employees/update/{id}")
    public void updateEmployee(@PathVariable(value = "id") Long id,
                               @RequestBody Employee employee) {
        this.employeeService.updateEmployee(id, employee);
    }

    @DeleteMapping(path = "/employees/delete/{id}")
    public void deleteEmployee(@PathVariable(value = "id") Long id) {
        this.employeeService.deleteEmployee(id);
    }
}
