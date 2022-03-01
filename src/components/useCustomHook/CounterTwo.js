import React, { useState } from 'react'
import useCounterCustom from './useCounterCustom'

function CounterTwo() {
    const [count,incrementCounter, decrementCounter, resetCounter] = useCounterCustom(10,2)
    // const [count,setCount] = useState(0)

    // const incrementCounter= () =>{
    //     setCount(prev=>prev+1)
    // }

    // const decrementCounter =() =>{
    //     setCount(prev=>prev-1)
    // }
    // const resetCounter =() =>{
    //     setCount(0)
    // }


  return (
    <div>
        <h2>count-{count}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
  )
}

export default CounterTwo