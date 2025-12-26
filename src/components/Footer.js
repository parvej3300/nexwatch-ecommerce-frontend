import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark p_80 pb-0 text-white">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-12 col-lg-4 mb-4 desc_box">
            <div className="mb-3">
              <img
                src="/images/white-logo.png"
                srcSet="/images/white-logo@2x.png 2x, /images/white-logo@3x.png 3x"
                alt="NexWatch Logo"
                className="logo_brand img-fluid"
              />
            </div>
            <p>
              At Nex Watch, we believe a watch is more than just a timekeeper—it's a
              statement. We offer a curated selection of premium watches that blend
              craftsmanship, innovation, and timeless style.
            </p>
            <div className="d-flex gap-2 social-icon">
              <Link to="/"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/"><i className="fab fa-instagram"></i></Link>
              <Link to="/"><i className="fab fa-youtube"></i></Link>
              <Link to="/"><i className="fa-brands fa-x-twitter"></i></Link>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="col-6 col-md-3 col-lg-2 col-6 mb-4">
            <ul className="list-unstyled common_ul">
              <li><Link to="/" className="text-decoration-none">About Us</Link></li>
              <li><Link to="/" className="text-decoration-none">Services</Link></li>
              <li><Link to="/" className="text-decoration-none">Blog</Link></li>
              <li><Link to="/" className="text-decoration-none">Brands</Link></li>
              <li><Link to="/" className="text-decoration-none">Shop</Link></li>
              <li><Link to="/" className="text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="col-6 col-md-3 col-lg-2 col-6 mb-4">
            <ul className="list-unstyled common_ul">
              <li><Link to="/" className="text-decoration-none">Support</Link></li>
              <li><Link to="/" className="text-decoration-none">Knowledge Base</Link></li>
              <li><Link to="/" className="text-decoration-none">Live Chat</Link></li>
              <li><Link to="/" className="text-decoration-none">Return/Exchange</Link></li>
              <li><Link to="/" className="text-decoration-none">Shipping Policy</Link></li>
              <li><Link to="/" className="text-decoration-none">Sitemap</Link></li>
            </ul>
          </div>

          {/* Subscribe and Payments */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <h6><i className="far fa-envelope"></i> Subscribe Us</h6>
            <form className="d-flex">
              <input type="email" className="form-control" placeholder="Enter your Email" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div>
              <h4>Secure Checkout</h4>
              <div className="mt-2">
                <img src="/images/cards.svg" alt="Cards" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top border-white mt-3 copy-rights">
          <p className="mb-0">© 2025 Nex Watch. All rights reserved.</p>
          <div className="d-flex gap-3">
            <Link to="/" className="text-decoration-none">Terms &amp; Condition</Link>
            <Link to="/" className="text-decoration-none">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;