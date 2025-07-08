import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import img8 from "../images/img8.jpg"
import img9 from "../images/img9.jpg"
import img10 from "../images/img10.jpg"
import img11 from "../images/img11.jpg"
import "../css/FrontPage.css";


const FrontPage2 = () => {
  return (
    <>

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

  )
}

export default FrontPage2;