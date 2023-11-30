import React, { useId } from 'react'
import { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Player } from '@lottiefiles/react-lottie-player';

var CryptoJS = require("crypto-js");


const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [loginSuccessful, setLoginSuccessful] = useState(false);


    const navigate = useNavigate();


    const handleUserIdSubmit = (e) => {
        e.preventDefault();
        const encryptedUserId = CryptoJS.AES.encrypt(userId, 'my-secret-key@123').toString();
        // const decryptedUserId = CryptoJS.AES.decrypt(encryptedUserId, 'my-secret-key@123').toString(CryptoJS.enc.Utf8);

        // Store encryptedUserId in localStorage
        localStorage.setItem('encryptedUserId', encryptedUserId);

        // Simulate server-side validation
        if (userId === 'FEED123') {

            setShowPasswordForm(true);
            toast.success('Confirmed', {
                autoClose: 1000,
            });

            // setUserId(decryptedUserId);
            console.log('Encrypted UserID:', encryptedUserId);
        } else if (userId === '') {
            toast.error('Please enter UserID');
        } else {
            toast.error('Invalid User ID. Please try again.');
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        const encryptedPassword = CryptoJS.AES.encrypt(password, 'my-secret-key@123').toString();
        // const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, 'my-secret-key@123').toString(CryptoJS.enc.Utf8);

        localStorage.setItem('encryptedPassword', encryptedPassword);

        // Simulate server-side validation
        if (password === '1001') {
            setLoginSuccessful(true);
            navigate('/dashboard');
            console.log('Encrypted Password:', encryptedPassword);
            // console.log('decryptedPassword Password:', decryptedPassword);
            //       setPassword(decryptedPassword);

        } else if (password === '') {
            toast.error('Please enter Password');
        } else {
            toast.error('Invalid Password. Please try again.');
        }
    };

    const handleOnclick = () => {
        setShowPasswordForm(false)
    }
    return (
        <div >

            <div className='row'>
                <div className='login-col1 col-lg-6 bg-dark text-white'>
                    <h1 className='text-center'>FeedBack</h1>

                    <div className='text-center my-5'>
                        <h1>A Platform for <span className='text-warning'>Feedback</span></h1>
                        <p className='fs-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    </div>

                    <div className='text-center my-5'>
                        <img src='https://images.ctfassets.net/lzny33ho1g45/how-to-give-effective-feedback-p-img/ebc38e191e4280117df2689428221c0c/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760' className='w-100'></img>
                    </div>

                    <div>
                        <h6 className='text-center'>Powererd By<span className='text-warning fs-3 px-1'>Lorem ipsum</span></h6>
                    </div>
                </div>
                <div className=' col-lg-6  align-self-center'>

                    <div className='login-col2'>
                        {loginSuccessful ? (
                            <p>Login Successful! Welcome, user {userId}!</p>
                        ) : showPasswordForm ? (
                            <form id='form-password' className=''>
                                <i onClick={handleOnclick} style={{ cursor: "pointer" }}><FaArrowLeft /></i>
                                <div className='form-group my-4'>
                                    <label className='fw-bold fs-3 border-bottom border-warning border-4'>PASSWORD</label>
                                    <label htmlFor="password" className="d-block pt-4" style={{ fontWeight: "500" }} >
                                        Password<span className='text-danger'>*</span>
                                    </label>
                                    <input
                                        placeholder='Enter Password'
                                        type="password"
                                        className="form-control "
                                        id="password"
                                        maxlength="4"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ border: "1px solid #ebc60c" }}
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-info w-100 rounded-pill" type="submit" onClick={handlePasswordSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form id='form-userid' onSubmit={handleUserIdSubmit} className=''>
                                <div className='form-group my-4 '>
                                    <label className='fw-bold fs-3 border-bottom border-warning border-4'>LOGIN</label>

                                    <label htmlFor="userId" className="d-block pt-4 " style={{ fontWeight: "500" }}>
                                        User ID<span className='text-danger'>*</span>
                                    </label>
                                    <input
                                        placeholder='Enter UserID'
                                        type="text"
                                        className="form-control"
                                        id="userId"
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        style={{ border: "1px solid #ebc60c" }}
                                    />
                                </div>
                                <div className=''>
                                    <button className="btn btn-info w-100 rounded-pill" type="submit">
                                        Submit
                                    </button>
                                </div>
                                <Player
                                    src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
                                    className="player"
                                    loop
                                    autoplay
                                    // speed={10}
                                />
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <ToastContainer
                autoClose={3000}
                theme="colored"
            />
        </div>
    )
}

export default Login