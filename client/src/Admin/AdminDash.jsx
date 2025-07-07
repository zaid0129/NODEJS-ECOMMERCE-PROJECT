import React from "react";
import Button from "react-bootstrap/Button";
import { Outlet, Link, useNavigate } from "react-router-dom";
// import { BsFillEmojiSmileFill } from "react-icons/bs";
import '../css/AdminDash.css'

let AdminDash=()=>{

 const navigate = useNavigate();
  
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
    return(
       <>

    <div className="admin-main">
      <div className="admin-topbar">
        <h3>Dashboard!</h3>
        <h2>
          Welcome, Admin {localStorage.getItem("adminUsr")}
        </h2>
        <button className="logout-btn" onClick={logout}>
          Log out
        </button>
      </div>

      <div className="admin-content">
        <aside className="admin-sidebar">
          <ul>
            <li>
              <Link to="users">Users</Link>
            </li>
            <li>
              <Link to="addproduct">Add Product</Link>
            </li>
            <li>
              <Link to="setting">Settings</Link>
            </li>
            <li>
              <Link to="logout">Logout</Link>
            </li>
          </ul>
        </aside>

        <main className="admin-outlet">
          <Outlet />
        </main>
      </div>
    </div>
    </>
        
    )
}

export default AdminDash;
