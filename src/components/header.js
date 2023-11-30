import React from 'react'

import { MdLogout } from "react-icons/md";

import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate=useNavigate();
  const HandleOnclick=()=>{
    navigate("/")

  }
  return (
    <>
      <div className="navbar">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9S-SurrlyV571EUbQDn-BE0Hl9bfey2JhlA&usqp=CAU' className='' style={{ width: "205px" }}></img>

        <div className='d-flex'>
          {/* <div className='nav-items d-flex'>
            <i className=""><MdLogout /></i>
            <a href="#"> home</a>
          </div>
          <div className='nav-items d-flex'>
            <i className=""><MdLogout /></i>
            <a href="#"> Search</a>
          </div>
          <div className='nav-items d-flex'>
            <i className=""><MdLogout /></i>
            <a href="#"> about</a>
          </div> */}
          <div className='nav-items d-flex border rounded-pill btn'
          onClick={HandleOnclick}>
            <i className=""><MdLogout /></i>
            <a > logout</a>
          </div>

        </div>


      </div>

    </>

  );
};

export default Header
