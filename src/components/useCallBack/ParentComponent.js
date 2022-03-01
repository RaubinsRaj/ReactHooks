import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age,setAge] = useState(25)
    const[salary,setSalary] = useState(5000)

    // const incrementAge =() =>{   //using without usecallbackhook
    //     setAge(age+1)
    // }
    // const incrementSalary=()=>{
    //     setSalary(salary+2000)
    // }
 //using useCallBackHook
    const incrementAge = useCallback(() =>{   
        setAge(age+1)
    },[age])

    const incrementSalary= useCallback(()=>{
        setSalary(salary+2000)
   },[salary])

  return (
    <div>
        <Title name=" - BY Raubins" />
       <Count text='Age' count={age}  />
       <Button handleClick= {incrementAge}> IncrementAge</Button>
       <Count text='Salary' count={salary} />
       <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  )
}

export default ParentComponent