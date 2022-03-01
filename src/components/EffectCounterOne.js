import React, { useEffect, useState } from 'react'

function EffectCounterOne() {

       const [count,setCount] =useState(0);
       const [name,setName] = useState('')
    useEffect(()=>{
        console.log('use effect- document title')
        document.title= `click ${count} times`
    },[count])
  return (
    <div>
        <div>
            <input type='text' value={name} onChange = {e => setName(e.target.value)} />
        </div>
        <button onClick={()=>setCount(count+1)}>Click {count}</button>
       {/* {console.log(document.title)} */}
    </div>
  )
}

export default EffectCounterOne