import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom'; 


const login =() => {
    return(
        <>
        <div className="lcontainer">
        <h3>Login to Continue</h3>
        <div className="form-container">
        <form>
            <div className="user-info">
            
            <input className="email" type="email" value="" placeholder="Email" />
            <br />
            <input className="password" type="password" value="" placeholder="Password" />
            <br />
            <button className="login-button"><span className="l-text">Login </span></button>
            </div>
            <div className="create">
            <Link to="sign-in" className="donot">Do not have an Account?</Link>
            </div>
        </form>
        </div>
        </div>
        </>
    )
}
export default login;