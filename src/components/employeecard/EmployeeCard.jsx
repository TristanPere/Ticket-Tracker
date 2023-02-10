import React from 'react'
import "./EmployeeCard.scss"
import { useState } from 'react'
const EmployeeCard = (props) => {
    const {name, role} = props
    const [counter, setCounter] = useState(Math.floor(Math.random() * 10));
  const handleIncrement = () => {
      setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  
  return (
    <div className='employee-card'>
        <header className='employee-card__name'>Name: {name}</header>
        <p className='employee-card__role'>Role: {role}</p>
        <div className='employee-card__tracker'>
            <header className='tracker__title'>Count</header>
            <div>{counter}</div>
            <div className='tracker__buttons'>
            <button onClick={handleDecrement}>-</button> <button onClick={handleIncrement}>+</button>
            </div>
            </div>
    </div>
  )
}

export default EmployeeCard