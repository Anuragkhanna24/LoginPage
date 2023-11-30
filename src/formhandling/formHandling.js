import React, { useState } from 'react'

export default function FormHandling() {
    const [detail, setDetail] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetail((pre) => {
            return { ...pre, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(detail)
        alert('Your Information is submited...you can check your information on console Log');
      
        
    }
    return (

        <div className='row m-4' >
            <div className='col-4'>
                <form className='form row ' onSubmit={handleSubmit}>
                    <h1>Ragistration Form</h1>
                    <span >user name</span> <input type='text' name='name' onChange={handleChange} />

                    <span >email </span><input type='email' name='email' onChange={handleChange} />
                    <span >password </span><input type='password' name='password' onChange={handleChange} />
                    <span >address </span><input type='address' name='address' onChange={handleChange} />

                    <button className='my-2 btn btn-info' type='submit'>submit </button>
                    

                </form>
              
            </div>
        </div>
    )
}

