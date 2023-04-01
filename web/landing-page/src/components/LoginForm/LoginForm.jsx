import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './LoginForm.scss';
// import { baseUrl, ngoUrl, doctorUrl } from '../../config';

const LoginForm = () => {
  const [loginInputs, setLoginInputs] = useState({
    username: '',
    password: '',
    role: '',
  });

  const handleLogin = async () => {
    if (
      loginInputs.username !== '' &&
      loginInputs.password !== '' &&
      loginInputs.role !== ''
    ) {
      if (loginInputs.role.toLowerCase() === 'ngo') {
        try {
          // const { data } = await axios.post(`${baseUrl}/ngos/login`, {
          //   email: loginInputs.username,
          //   password: loginInputs.password,
          // });

          // window.open(`${ngoUrl}/?name=Khalsa Aid`);
        } catch (err) {
          alert('Login Unsuccessful!');
          console.error(err);
        }
      } else if (loginInputs.role.toLowerCase() === 'doctor') {
        // If the user is a doctor, login the doctor and redirect him to the Doctor's Dashboard
        try {
          // Check doctor's login credentials from the backend
          // const { data } = await axios.post(`${baseUrl}/doctors/login`, {
          //   email: loginInputs.username,
          //   password: loginInputs.password,
          // });

          // Redirect the user to the Doctor's Dashboard
          // window.open(`${doctorUrl}/?id=1`);
        } catch (err) {
          alert('Login Unsuccessful!');
          console.error(err);
        }
      } else {
        alert('Select a proper Role');
      }
    } else {
      alert(
        'Your Username or Password cannot be empty. Please fill all the required fields!'
      );
    }
  };

  return (
    <div className="loginForm">
      <div className="heading">Login</div>

      <div className="formInputs">
        <form className="form">
          <div className="formRow">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={loginInputs.username}
              onChange={(e) => {
                setLoginInputs({ ...loginInputs, username: e.target.value });
              }}
              placeholder="janedoe123"
            />
          </div>
          <div className="formRow">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={loginInputs.password}
              onChange={(e) => {
                setLoginInputs({ ...loginInputs, password: e.target.value });
              }}
            />
          </div>

          <div className="formRow">
            <label htmlFor="role">Role</label>
            <select
              name="role"
              onChange={(e) => {
                setLoginInputs({ ...loginInputs, role: e.target.value });
              }}
            >
              <option value="">Select Role</option>
              <option value="ngo">NGO</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* <a href={}> */}
          <button className="button" type="button" onClick={handleLogin}>
            Login
          </button>
          {/* </a> */}

          <Link to="/register">New to SwaMi app? Register Now...</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
