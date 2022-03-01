import {useState} from 'react'

function useCounterCustom(intialCount=0,value) {
    const [count,setCount] = useState(intialCount)

    const incrementCounter= () =>{
        setCount(prev=>prev+value)
    }

    const decrementCounter =() =>{
        setCount(prev=>prev-value)
    }
    const resetCounter =() =>{
        setCount(0)
    }
    return [count, incrementCounter, decrementCounter, resetCounter]
}

export default useCounterCustom