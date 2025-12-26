import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchModal from './SearchModal';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  // total quantity in cart
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0);

  console.log(cartCount)
  // Check if current path matches
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white sticky-top shadow">
        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="NexWatch Logo" />
          </Link>

          {/* Mobile Cart Icon */}
          <Link to="/cart" className="icon-btn position-relative d-block ms-auto d-lg-none">
            <img src="/images/cart-Icon.svg" alt="cart" />
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-toggler ms-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={isActive('/')} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive('/shop')} to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive('/contact')} to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className={isActive('/admin/products')} to="/admin/products">Admin</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="d-flex align-items-center d-none d-lg-block">
            <button
              onClick={() => setShowSearch(true)}
              className="icon-btn position-relative bg-transparent border-0"
            >
              <img src="/images/search.svg" alt="search" />
            </button>
            <button
              className="icon-btn user_icon bg-transparent border-0"
            >
              <img src="/images/user-Icon.svg" alt="user" />
            </button>

            <Link to="/cart" className="icon-btn position-relative">
              <img src="/images/cart-Icon.svg" alt="cart" />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <SearchModal show={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
};

export default Navbar;