import React from "react";
import { NavLink } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const { firstName, lastName, emailId } = employee;

  return (
    <tr>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <NavLink
          to={`/updateEmployee/${employee.id}`}
          className="text-indigo-600 hover:text-indigo-900 px-4 cursor-pointer"
        >
          Edit
        </NavLink>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-900 px-4 cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
