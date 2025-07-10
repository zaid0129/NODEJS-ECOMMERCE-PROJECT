
import { Link } from "react-router-dom";
import "../css/FrontPage.css";
import Slider1 from "../images/Slider1.jpg"
import Slider2 from "../images/Slider2.jpg"
import Slider3 from "../images/Slider3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const FrontPage = () => {
  return (
    <>
 <Carousel fade>
      <Carousel.Item>
      <img src={Slider1} className="slide" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={Slider2} className="slide" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={Slider3} className="slide" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    {/* ---------------------------------------------------------------------- */}

    {/* SECTION - 1 */}
   {/* <div className="frontpage-wrapper">
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
    </div>  */}


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
