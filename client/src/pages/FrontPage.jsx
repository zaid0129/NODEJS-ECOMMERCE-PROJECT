
import { Link } from "react-router-dom";
import "../css/FrontPage.css";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg.avif"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.jpg"
import img11 from "../images/img11.jpg"


const FrontPage = () => {
  return (
    <>
   <div className="frontpage-wrapper">
      <div className="left-side">
        <img src={img1} alt="Hammock Girl" />
      </div>

      <div className="right-side">
        <img src={img2}alt="Model" className="background-image" />
        <div className="text-overlay">
          <h1>Comfy Chic<br />Loungewear</h1>
          <p>I'm a paragraph. Click here to add your text</p>
          <a href="#" className="shop-link">Shop Collection</a>
        </div>
      </div>
    </div>


{/* SECTION - 2 */}

      <div className="section-two">
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
      </div>


{/* SECTION - 3 */}


    <div className="section-three">
  <div className="section-three-left">
    <img src={img5} alt="Woman in orange dress" />
  </div>

  <div className="section-three-right">
    <p className="section-subtitle">Day. DREAM &nbsp; • &nbsp; LOUNGEWEAR &nbsp; • &nbsp; 2025 LOOKBOOK</p>
    <div className="section-three-card">
      <img src={img6}alt="Small cropped" />
      <h2>At Home. In Style.</h2>
      <a href="#" className="text-link">View More</a>
    </div>
  </div>
</div>


{/* SECTION - 4  */}

<div className="section-four">
  <p>Follow @DayDream on Instagram</p>
  <div className="insta-gallery">
    <img src={img7} alt="insta1" />
    <img src={img8} alt="insta2" />
    <img src={img9} alt="insta3" />
    <img src={img10} alt="insta4" />
    <img src={img11} alt="insta5" />
  </div>
</div>


{/* SECTION - 6 */}


<div className="newsletter-section">
  <p1>Stay Comfy</p1>
  <p>Subscribe for Updates & Special Offers</p>
  <form className="newsletter-form">
    <label htmlFor="newsletter-email">Email *</label>
    <div className="input-row">
      <input type="email" id="newsletter-email" placeholder=" " required />
      <button type="submit">Subscribe</button>
    </div>
  </form>
</div>


    </>
  );
};

export default FrontPage;
