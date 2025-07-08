
import { Link } from "react-router-dom";
import "../css/FrontPage.css";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg.avif"


const FrontPage = () => {
  return (
    <>

    {/* SECTION - 1 */}
  <div className="frontpage-wrapper">
      <div className="left-side">
        <img src={img1} alt="Hammock Girl" />
      </div>

      <div className="right-side">
        <img src={img2}alt="Model" className="background-image" />
        <div className="text-overlay">
          <h1>Comfy Chic<br />Loungewear</h1>
          <p>I'm a paragraph. Click here to add your text</p>
          <a href="" className="shop-link">Shop Collection</a>
        </div>
      </div>
    </div> 


{/* SECTION - 2 */}

      {/* <div className="section-two">
        <div className="section-two-block">
          <img src={img4} alt="Model in window" />
          <div className="caption">
            <h2>25% Off Loungewear Sets</h2>
            <a href="#" className="text-link">Shop Now</a>
          </div>
        </div>


        <div className="section-two-block">
          <img src={img3} alt="Comfort zone sofa" />
          <div className="caption">
            <h2>Introducing: Comfort Zone</h2>
            <a href="#" className="text-link">Read Our Blog</a>
          </div>
        </div>
      </div> */}




    </>
  );
};

export default FrontPage;
