import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import "../css/Userlogin.css"


const Userlogin = () => {

   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = async () => {
    navigate('/userregis');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    let api = `${BackEndUrl}/user/userlogin`;

    try {
      const response = await axios.post(api, {
        email: email,
        password: password,
      });
      localStorage.setItem("email", response.data.email);
      console.log(response.data.msg);
      navigate("/userdash");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-containerr">
        <div className="login-form">
          <h1>User Login</h1>

          <div className="form-group">
            <label>Enter Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Enter Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="remember-row">
              <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Show Password
              </label>
            </div>
            <p>Forgot Password?</p>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Log in
          </button>

          <p>Don't have an account?</p>
          <button onClick={handleRegistration}>Register</button>
        </div>
      </div>
      
    </>
  );
}

export default Userlogin