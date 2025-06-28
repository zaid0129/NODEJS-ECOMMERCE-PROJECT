import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import FrontPage from "./pages/FrontPage";


let Layout=()=>{
    return(
        <>
        
        <Header/>
        <FrontPage/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;