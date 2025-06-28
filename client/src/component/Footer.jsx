import { Link } from 'react-router-dom';
import '../css/Footer.css'; 

let Footer =()=>{
    return(
        <>
{/* Section: Footer */}
<div className="footer-section">
  <div className="footer-links">
    <ul className="footer-column">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
    <ul className="footer-column">
      <li><Link to="/lookbook">Lookbook</Link></li>
      <li><Link to="/our-story">Our Story</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <ul className="footer-column">
      <li><Link to="/policy">Store Policy</Link></li>
      <li><Link to="/shipping-returns">Shipping & Returns</Link></li>
      <li><Link to="/faq">FAQ</Link></li>
    </ul>
    <ul className="footer-column">
      <li><Link to="/facebook">Facebook</Link></li>
      <li><Link to="/instagram">Instagram</Link></li>
      <li><Link to="/pinterest">Pinterest</Link></li>
    </ul>
  </div>

  <p className="copyright">
    ©2035 by <em>Day.</em> DREAM. Powered and secured by Zaid
  </p>
</div>

        
        </>
    )
}

export default Footer; 