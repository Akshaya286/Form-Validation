
import React, { useState } from "react";
import shopping from "../Assets/Images/shopping.jpg";
import shopping2 from "../Assets/Images/shopping2.webp";
import shopping3 from "../Assets/Images/shopping3.jpg";
import { Modal, Button } from 'antd';
import './dashboard.css'

function Dashboard() {
  
  const [isModalVisible, setIsModalVisible] = useState(false)
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  
  return (
    <div className="container">
      <div className="d-flex my-3 justify-content-around">
        <div class="card" style={{ width: "18rem" }}>
          <img src={shopping} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={shopping2} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card" style={{ width: "18rem" }}>
          <img src={shopping3} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="custom-table d-flex">
      <div className="grid">
            <div className="row">
            <h6 className="text-center custom-heading text-info fw-bold fs-4">LIST OF USERS</h6>
            <div class="input-group mb-3 custom-input text-center">
  <input type="text" class="form-control " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-search"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
</div>

                <div className="lg-col-12 tab">
         
         <table className="tab" >
             <thead className="bg-light">
                 <tr className="border-bottom  ms-3 table-heading text-center">
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
                 <tr className="border-bottom text-center ms-3">
                     <td className="p-2">1</td>
                     <td>Joe</td>
                     <td>21</td>
                     <td>15/02/2022</td>
                     <td>UK</td>
                     <td>Registered</td>
                     <th>*****</th>
                 </tr>
                 <tr className="border-bottom  text-center ms-3">
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
        
        <div className="view"><Button type="primary" onClick={showModal}>
        <i class="bi bi-eye"></i><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
</svg>
      </Button>
      <Modal title="" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <h3 className="text-center text-success">Table Viewed</h3>
      </Modal></div>
      </div>
      
          
      
      
    </div>
  );
}

export default Dashboard;
