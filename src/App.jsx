import "./App.scss";
import EmployeeCardContainer from "./containers/EmployeeCardContainer/EmployeeCardContainer";
import Dropdown from "./containers/roledropdown/Dropdown";
import { useState } from "react";
function App() {
  const [nameFilter, setNameFilter] = useState("")
  const [roleFilter, setRoleFilter] = useState("")
  const handleInput = (event) => {
    setNameFilter(event.target.value)
  }
  const handleSelect = (event) =>{
    setRoleFilter(event.target.value)
  }
  const handleRest = ()=>{
    setNameFilter("")
    setRoleFilter("")
  }
  

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar__search">
          <label htmlFor="employee-search">Employee Search:</label>
          <input type="text" name="employee-search" onInput={handleInput} />
        </div>
        <h1 className="navbar__title">Ticket Tracker</h1>
        <Dropdown handleSelect={handleSelect}/>
        <button className="navbar__reset" onClick={handleRest}>Reset Filters</button>
      </nav>
      <EmployeeCardContainer nameFilter={nameFilter} roleFilter={roleFilter}/>
    </div>
  );
}

export default App;
