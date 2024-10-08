import '../css/header.css';
import React, { useState } from 'react';

import LoginForm from './LoginForm';

function Header({onLogin}) {

    const [showLoginForm, setShowLoginForm] =useState(false);

    //login form visibility
    const handleLoginClick=()=>{
        setShowLoginForm(true);
    };

    const handleLoginClose =()=>{
      setShowLoginForm(false);
    }
   
    //handle authentication(send creadentials to backend)

    const handleLoginSubmit=(credentials)=>
    {
        console.log('login submitted: ', credentials);

        // Pass the login details to the App.js (especially the role)
        onLogin(credentials);

       // Close the login form
       setShowLoginForm(false);
        
    }


    return (
      <div>
        <header className="header">
          <div className="header-left">
            <img src="images/logo.png" alt="Company Logo" className="logo" />
          </div>
          <div className="header-container">
            <h1>Server Inventory Management</h1>
            <nav>
            </nav>
            <div className="login-container">
              <button onClick={handleLoginClick}>Login</button>
            </div>
          </div>
          {/* Render login form when showLoginFomm true */}
          <LoginForm
           isOpen={showLoginForm}
           onClose={handleLoginClose}
           onSubmit={handleLoginSubmit}
          ></LoginForm>
        </header>
      </div>
    );
  }
  
  export default Header;
  