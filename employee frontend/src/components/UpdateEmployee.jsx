import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const updateEmployee = async (e) => {
    e.preventDefault();
    try {
      const response = await EmployeeService.updateEmployee(id, employee);
      if (response) {
        navigate("/employeeList");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className=" font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
        </div>
        <div className="items-center justify-center h-14-w-full">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 py-2"
          />
        </div>

        <div className="items-center justify-center h-14-w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14-w-full">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="text"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 py-2"
          />
        </div>
        <div className="items-center justify-center h-14-w-full space-x-4 pt-4">
          <button
            onClick={updateEmployee}
            className=" rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            update
          </button>
          <NavLink
            to="/employeeList"
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
          >
            Cancel
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
