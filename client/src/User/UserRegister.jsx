import React, { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/UserRegister.css"

const UserRegister = () => {
     const nav = useNavigate();
  const [inp, setInp] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInp(values => ({ ...values, [name]: value }));
    console.log(inp);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inp.password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let api = `${BackEndUrl}/user/userregis`

    try {
      const response = await axios.post(api, inp);
      console.log(response);
      nav('/userlogin')

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="login-containerr">
        <div className="login-form">
          <h1>Register Yourself</h1>

          <div className="form-group">
            <label>Enter Name</label>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label>Enter Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label>Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Enter Contact</label>
            <input
              type="text"
              placeholder="Contact"
              name="contact"
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label>Enter Address</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleInput}
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" required /> I agree to the Terms & Conditions
            </label>
          </div>

          <button onClick={handleSubmit}>Register</button>

          <p>
            Already have an account?{" "}
            <span
              onClick={() => nav('/userlogin')}
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserRegister