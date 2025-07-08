
import '../css/Header.css'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackEndUrl from '../utils/BackEndUrl';
import { useEffect } from 'react';



let Header = ()=>{


  // const nav=useNavigate()
  // function handleUser(){
  //    nav('/userLogin')
  // }

  const handleCart=()=>{
    nav('addtocart')
  }

  const auth = async()=>{
    let token= localStorage.getItem("token")
    console.log(token)

    if(token){
      let api = `${BackEndUrl}/admin/jwt`

      try {

        const response = await axios.post(api, null, {headers:{"x-token":token}})
        console.log(response.data);
        localStorage.setItem("name", response.data.name);
        nav('/admindash')
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
    useEffect(()=>{
      auth()
    },[])




    return(
        <>
 <nav className="navbar">
      <ul className="nav-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/lookbook">Lookbook</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-center">
        <Link to="/" className="logo"><i>Day.</i> DREAM</Link>
      </div>

      <ul className="nav-right">
        <li><Link to="/userLogin">Log In</Link></li>
        <li><Link to="addtocart" className="cart" >🛒 Cart</Link></li>
      </ul>
    </nav>    
    
      </>
    )
}

export default Header; 