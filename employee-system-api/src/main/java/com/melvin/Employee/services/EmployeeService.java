package com.melvin.Employee.services;

import com.melvin.Employee.entity.EmployeeEntity;
import com.melvin.Employee.model.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployee();

    boolean deleteEmployee(long id);

    Employee getEmployeeById(long id);

    Employee updateEmployee(long id, Employee employee);
}
