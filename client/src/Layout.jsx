import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import FrontPage from "./pages/FrontPage";
import FrontPage2 from "./pages/FrontPage2";
import Cards from "./component/Cards";
import Home from "./component/Home";
import Marquee from "./component/Marquee";
import CustomerReview from "./component/CustomerReview";


let Layout=()=>{
    return(
        <>
        
        <Header/>
        <FrontPage/>
        <Cards/>
        <Marquee/>
        <Home/>
        <CustomerReview/>
        <FrontPage2/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;