import React from "react";
import "./EmployeeCardContainer.scss";
import teamdata from "../../data/teamdata";
import EmployeeCard from "../../components/employeecard/EmployeeCard";
const EmployeeCardContainer = (props) => {
  const { nameFilter, roleFilter } = props;
  const filterArr = [...teamdata];

  let nameFilteredArr = filterArr.filter((employee) => {
    const searchTerm = nameFilter;
    return employee.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  let roleFilteredNameArr = nameFilteredArr.filter((employee) => {
    const searchTerm = roleFilter;
    return employee.role.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const employeeJSX = roleFilteredNameArr.map((employee) => {
    return (
      <EmployeeCard
        name={employee.name}
        role={employee.role}
        key={employee.id}
      />
    );
  });
  return <div className="employee-card-container"> {employeeJSX}</div>;
};

export default EmployeeCardContainer;
