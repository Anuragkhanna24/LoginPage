import React, { useState, useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { TbLayoutDashboard } from "react-icons/tb";


const Sidebar = ({ name, ...props }) => {
  const [show, setShow] = useState(window.innerWidth > 992);
  const handleToggle = () => {
    setShow((prevShow) => !prevShow);
  };

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth > 992);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='sidebar'>
      <Button variant="white" onClick={handleToggle} className="me-2 fs-3" >
        &#9776;
      </Button>

      <Offcanvas show={show} onHide={() => setShow(false)} className="sidebar-div">
        <Offcanvas.Header closeButton={window.innerWidth <= 992}>
          <Offcanvas.Title className=' w-100 text-warning'>FEEDBACK</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-start' >
          <Link to='/home' style={{ textDecoration: "none" }}>
            <div className='text-dark'><i className='px-1'><IoHomeOutline /></i>HOME</div>
          </Link>
          <Link to='/dashboard' style={{ textDecoration: "none" }} >
            <div className='text-dark'><i className='px-1'><TbLayoutDashboard /></i>DASHBOARD</div>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
