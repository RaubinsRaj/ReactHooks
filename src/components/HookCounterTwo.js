import React, { useState } from 'react'

function HookCounterTwo() {

    const initialcount=0;
    const [count,setCount] = useState(initialcount)

   const incrementfive = () => {
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount +1)
        }
    }

  return (
    <div>
        {count}
        <button onClick={()=>setCount(initialcount)}>Reset</button>
        {/* <button onClick={()=>setCount(count+1)}>Increment </button>
        <button onClick={()=>setCount(count-1)}>Decrement </button> */}
        <button onClick={()=>setCount(prevCount => prevCount +1)}>Increment </button>
        <button onClick={()=>setCount(prevCount => prevCount -1)}>Decrement </button>
        <button onClick={incrementfive}>Incrementfive</button>
    </div>
  )
}

export default HookCounterTwo