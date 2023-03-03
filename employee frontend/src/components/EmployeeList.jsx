import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getAllEmployees();
        setEmployees(response.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();

    EmployeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <NavLink
          to="/addEmployee"
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </NavLink>
      </div>
      <div className="flex shadow border-b">
        <table className=" min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 tracking-wider uppercase py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 tracking-wider uppercase py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 tracking-wider uppercase py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 tracking-wider uppercase py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employees?.map((employee) => {
              return (
                <Employee
                  employee={employee}
                  key={employee.id}
                  deleteEmployee={deleteEmployee}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
