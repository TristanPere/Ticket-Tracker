import "./Dropdown.scss";
import React from "react";
import TeamData from "../../data/teamdata";
import { computeHeadingLevel } from "@testing-library/react";
const Dropdown = (props) => {
  const {handleSelect} = props
  const roleArr = TeamData.map((employee) => {
    return employee.role;
  });
  const uniqRoleArr = [...new Set(roleArr)];
  const optionRoleArr = uniqRoleArr.map((role, index) => {
    return <option value={role} key={index}>{role}</option>;
  });

  return (
    <select onChange={handleSelect} name="roles" id="roles">
      {optionRoleArr}
    </select>
  );
};

export default Dropdown;
