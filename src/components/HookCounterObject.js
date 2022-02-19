import React, { useState } from 'react'

function HookCounterObject() {

    const [name, setName] = useState({
        firstname: '',
        lastname: ''
    })
    const submitHandler = (e)=>{
        e.preventDefault();
        // localStorage.getItem("name",name)
        localStorage.setItem('Name', name);

    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type= "text" 
            value= {name.firstname} 
            // onChange={(e)=>setName({firstname: e.target.value})}/>
            onChange={(e)=>setName({...name, firstname: e.target.value})}/>

            <input type= "text" 
            value= {name.lastname} 
            onChange={(e)=>setName({...name, lastname: e.target.value})}/>
            <h2>Firstname: {name.firstname}</h2>
            <h2>LastName: {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>

            <button type='submit'>Submit</button>
        </form>
        {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div>
               Password: <p>{localStorage.getItem('Password')}</p>
            </div>
         )}

    </div>
  )
}

export default HookCounterObject