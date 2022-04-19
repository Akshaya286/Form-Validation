import React, {useState} from "react";
import { Modal, Button } from 'antd';


function Table(){
    
    return(
        <div className="grid">
            <div className="row">
            <h3 className="text-center">List of Users</h3>
            <div class="input-group mb-3 custom-input">
  <input type="text" class="form-control " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
</div>

                <div className="lg-col-12 custom-table">
         
         <table >
             <thead className="bg-light">
                 <tr className="border-bottom table-heading text-center table-heading">
                     <th className="p-2">S.No</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Date</th>
                     <th>Location</th>
                     <th>Status</th>
                     <th>Rating</th>
                 </tr>
             </thead>
             <tbody>
                 <tr className="border-bottom text-center">
                     <td className="p-2">1</td>
                     <td>Joe</td>
                     <td>21</td>
                     <td>15/02/2022</td>
                     <td>UK</td>
                     <td>Registered</td>
                     <th>*****</th>
                 </tr>
                 <tr className="border-bottom  text-center">
                     <td className="p-2">2</td>
                     <td>Andrew</td>
                     <td>23</td>
                     <td>09/02/2022</td>
                     <td>San Francisco</td>
                     <td>Registered</td>
                     <th>*****</th>
                 </tr> 
                 <tr className="border-bottom  text-center">
                     <td className="p-2">3</td>
                     <td>Sam</td>
                     <td>19</td>
                     <td>31/02/2022</td>
                     <td>Beijing</td>
                     <td>Registered</td>
                     <th>*****</th>
                 </tr> 
                 <tr className="border-bottom  text-center">
                     <td className="p-2">4</td>
                     <td>Anto</td>
                     <td>30</td>
                     <td>02/02/2022</td>
                     <td>New York City</td>
                     <td>Registered</td>
                     <th>*****</th>
                 </tr> 
                 <tr className="border-bottom text-center">
                     <td className="p-2">5</td>
                     <td>Yash</td>
                     <td>28</td>
                     <td>23/02/2022</td>
                     <td>Canada</td>
                     <td>Registered</td>
                     <th>*****</th>
                 </tr>     
             </tbody>
         </table>
         </div>
         </div>
        </div>
    )
}
export default Table