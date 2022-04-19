import React from 'react'
import ak from '../Assets/Images/ak.jpg'
import {Routes,Route,Link} from "react-router-dom";
import Dashboard from './Dashboard'
import Subscreen from './Subscreen';
import './dashboard.css'



function login(){
    return(
        <div>
          <nav class="navbar navbar-light border-dark border-bottom">
          <div class="container">
            <div className=" d-flex ">
    <div>
    <a class="navbar-brand" href="#">
      <img src={ak} alt="" width="130" height="50" className='custom-image'/>
    </a>
    </div>
  <div className='text-center'>
    <h4 className='text-center dashboard'>Dashboard</h4>
  </div>
  <div>  
  <span class="nav-item">
  <i class="bi bi-person-circle icon-1"></i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> </span>
    <span class=" fs-4 mx-3">Account</span>
  </div>
  <div>
  <span class="nav-item">
  <i class="bi bi-box-arrow-in-right icon-2"></i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg></span>
    <span class=" fs-4 mx-3">Logout</span>
</div>
</div>
</div>
</nav>
<div className='sidebar'>
   <div className='sidebar-content'>
   <Link to ="/dashboard"><h4 className=' p-4'>Dashboard</h4></Link>
   <Link to ="/subscreen"><h4 className=' p-4'>Subscreen</h4></Link>
   </div>
    </div> 
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/subscreen" element={<Subscreen/>}/>
        </Routes>
        </div> 
    )
} 

export default login