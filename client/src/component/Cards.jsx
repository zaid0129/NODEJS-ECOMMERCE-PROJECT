import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import new1 from "../images/new1.jpg"
import img4 from "../images/img4.jpg.avif"
import img5 from "../images/img5.jpg"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.jpg"
import "../css/Cards.css"

let Cards=()=>{
    return(
        <>
         <div className="card-sec">
      <h2 id="h2">TOP RATED</h2>

      <div className="card-sec1">
        <div className="card">
          <img src={img1} alt="" />
          <p>Brigette Longsleeve</p>
          <p>RS. 8000.00</p>
          <Link to="addtocart" className="add-btn">Add to Cart</Link>
        </div>

        <div className="card">
          <img src={img2} alt="" />
          <p>Chill Filo Tank</p>
          <p>RS. 9000.00</p>
          <Link to="addtocart" className="add-btn">Add to Cart</Link>
        </div>

        <div className="card">
          <img src={img3} alt="" />
          <p>Innovate Blazer</p>
          <p>RS. 14000.00</p>
          <Link to="addtocart" className="add-btn">Add to Cart</Link>
        </div>
      </div>

      <h2 id="h1">FRESH COLLECTIONS</h2>

      <div className="card-sec2">
        <div className="card">
          <img src={new1 } alt="" />
          <p>Workwear Dress</p>
          <p>RS. 9500.00</p>
          <Link to="addtocart" className="add-btn">Add to Cart</Link>
        </div>

        <div className="card">
          <img src={img5} alt="" />
          <p>BODYCON</p>
          <p>RS. 14000.00</p>
          <Link to="addtocart" className="add-btn">Add to Cart</Link>
        </div>

        <div className="card">
          <img src={img4} alt="" />
          <p>CORDSET</p>
          <p>RS. 8500.00</p>
          <Link to="addtocart" className="add-btn">Add to Cart</Link>
        </div>

        <div className="card">
          <img src={img7} alt="" />
          <p>ETHNICS</p>
          <p>RS. 11000.00</p>
          <Link to="addtocart" className="add-btn">Add to Cart</Link>
        </div>
      </div>
    </div>
        </>
    )
}

export default Cards;