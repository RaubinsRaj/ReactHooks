import React, { useState } from 'react'

const UseStateArray = () => {

    const bioData= [
        {id:0,name:"Raubins",age:24},
        {id:1,name:"Raj",age:23}
    ]

    const [names,setNames] = useState(bioData);

    const clearDetails = ()=>{
        setNames([]);
    }


  return (
    <div>
        {
            // bioData.map((crr)=> <h2 key={crr.id}> Name: {crr.name} Age: {crr.age}</h2>)
            names.map((crr)=> <h2 key={crr.id}> Name: {crr.name} Age: {crr.age}</h2>)
        }
        <button onClick={clearDetails}>Clear</button>
    </div>
  )
}

export default UseStateArray