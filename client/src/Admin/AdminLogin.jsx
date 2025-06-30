import { useState } from 'react';
import '../css/AdminLogin.css'
import { useNavigate } from 'react-router-dom';
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';

let AdminLogin=()=>{

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();


  const handleSubmit= async(e)=>{
    console.log(adminId, password);

    e.preventDefault();

    let api = `${BackEndUrl}/admin/adminlogin`;

    try {
      const response = await axios.post(api, {adminId:adminId, password:password})
      console.log(response.data.msg);

      navigate('/admindash')
      
    } catch (error) {
      console.log(error.response.data.msg);
    }

  }


    return(
        <>
        <div className="admin-login-page">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form className="login-form">
          <label htmlFor="email">Email *</label>
          <input
            type="text"
            value={adminId}
            onChange={(e)=>{setAdminId(e.target.value)}}
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder="Enter your password"
          />

          <button type="submit" onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
       
        </>
    )
}

export default AdminLogin;