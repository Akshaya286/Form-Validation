import React, { useState } from 'react'

function Sample(){
 const [name, setName] = useState()
 const [error, setError] = useState(false)

 const handleSubmit=()=>{
   if(!name.match(/^[a-zA-Z ]*$/)){
      setError(true)
   }
   else{
       setName('')
   }
 }
   return(
       <div>
           <span>Name</span>
           <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
           {error&&<div>Please enter a valid name</div>}
           <button onClick={handleSubmit}>Submit</button>
           
       </div>
   )
}

export default Sample