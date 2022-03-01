import {useEffect} from 'react'

function useDocumetTitle(count) {
   useEffect(()=>{
    document.title= `count ${count} times`
},[count])

}

export default useDocumetTitle