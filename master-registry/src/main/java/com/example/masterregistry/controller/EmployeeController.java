package com.example.masterregistry.controller;

import com.example.masterregistry.entity.Employee;
import com.example.masterregistry.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins = "*")
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping(path = "/all")
    public List<Employee> getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }

    @PostMapping(path = "/add")
    public void addEmployee(@RequestBody Employee employee){
        this.employeeService.addEmployee(employee);
    }

    @PutMapping(path = "/update")
    public void updateEmployee(@RequestBody Employee employee) {
        this.employeeService.updateEmployee(employee);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteEmployee(@PathVariable(value = "id") Long id) {
        this.employeeService.deleteEmployee(id);
    }
}
