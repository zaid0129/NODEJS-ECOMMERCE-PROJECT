import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import FrontPage from "./pages/FrontPage";
import FrontPage2 from "./pages/FrontPage2";
import Cards from "./component/Cards";
import Home from "./component/Home";


let Layout=()=>{
    return(
        <>
        
        <Header/>
        <FrontPage/>
        <Cards/>
        <Home/>
        <FrontPage2/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;