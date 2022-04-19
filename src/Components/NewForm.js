import React, {useState} from 'react';
import {Routes,Route,Link} from "react-router-dom";
import './newform.css'
import formimg from '../Assets/Images/formimg.webp'
import Login from './Login';
 

function NewForm(){
   
  const [userId, setUserId]=useState('')
  const [password, setPassword]=useState('')
  const [errors, setErrors]=useState(false)
 
  const handleSubmit=()=>{
    if(!userId.match(/^[a-zA-Z ]*$/)){
      setErrors(true)
   }
   else{
       
       setUserId('')
   }
   if(!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)){
    setErrors(true)


 }
 else{
     
     setPassword('')
 }
 
 }
  
    
    return(
        <div className='d-flex justify-content-center'>
        <div className='left-side'>
        <img src={formimg}/>
        </div>
        <div className='right-side text-center'>
         <div className='right-content mb-5'>
             <h3 className='text-danger fw-3'>Login User</h3>
         </div>
         <div>
             <span><b>User Name</b></span>
             <input type="text"  value={userId}className='my-3 ms-2 rounded' onChange={(e)=>setUserId(e.target.value)} placeholder='Enter User ID'/><br/>
             {errors&&<div><p>*Please enter alphabet characters only</p></div>}
             <span><b>Password</b></span>
             <input type="text"  value={password} className='my-3 ms-2 rounded' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/><br/>
             {errors&&<div><p>*Please enter secure and strong password</p></div>}
             <Link to="/Login"> <button className='btn-primary rounded custom-button' onClick ={handleSubmit}>Submit</button></Link>
            
             
         </div>
        </div>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          </Routes>
        </div>
    )
}
export default NewForm